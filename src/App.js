import Navbar from "./components/Navbar";
import Form from "./components/form";
import listarRegistro from "./components/ListarRegistro";
import smartContract from "./smartContract/registro.json";
import { useEffect, useState } from "react";
import Web3 from "web3";

function App() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [contract, setContract] = useState();
  const [Metamask, setMetamask] = useState(false);
  const [listarInformacionEstudios, setListarInformacionEstudios] = useState(
    []
  );
  console.log("listarInformacionEstudios ==> ", listarInformacionEstudios);

  const listarRegistro = async () => {
    console.log("contract==>", contract);
    if (contract) {
      try {
        const contadorRegistro = await contract.methods
          .registroCounter()
          .call();
        console.log("contadorRegistro ==>", contadorRegistro);

        let arrayEstudio = [];

        for (let i = 1; i <= contadorRegistro; i++) {
          const inforestudio = await contract.methods.estudios(i).call();
          console.log(inforestudio);
          if (inforestudio.categoria != "") {
            const estudio = {
              categoria: inforestudio.categoria,
              creatAtl: inforestudio.creatAtl,
              fechaFin: inforestudio.fechaFin,
              fechaInicio: inforestudio.fechaInicio,
              id: inforestudio.id,
              lugarDeFormacion: inforestudio.lugarDeFormacion,
              tituloEstudio: inforestudio.tituloEstudio,
              verificacion: inforestudio.verificacion,
            };
            arrayEstudio.push(estudio);
          }
        }
        setListarInformacionEstudios(arrayEstudio);

        //console.log(arrayEstudio)
      } catch (error) {
        console.error("Error al actualizar el valor:", error);
      }
    }
  };

  useEffect(() => {
    listarRegistro();
  }, [contract]);

  useEffect(() => {
    async function Wallet() {
      if (typeof window.ethereum !== "undefined") {
        console.log("Tenemos wallet");
        setMetamask(true);
      } else {
        console.log("No hay wallet");
      }
    }
    Wallet();
  }, []);

  console.log(smartContract);

  const conectarWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
      try {
        //Obtener la direccion de la cuenta actual
        await window.ethereum.enable();
        //Obtener las direcciones de la cuenta actual
        const account = await web3Instance.eth.getAccounts();
        setAccount(account[0]);
        //console.log(account[0])
        //Obtener el saldo  de la cuenta
        const balanceWei = await web3Instance.eth.getBalance(account[0]);
        const balanceEth = web3Instance.utils.fromWei(balanceWei, "ether");
        setBalance(balanceEth);
        //console.log(balanceEth)

        const contractInstance = new web3Instance.eth.Contract(
          smartContract,
          smartContract && "0x34D44DBc2c73B0eCb4bC738bfB850f92AaB89ae2"
        );
        setContract(contractInstance);
        console.log("contractIntance ==>", contractInstance);
      } catch (error) {
        console.error(error);
      }
    } else {
      setMetamask(false);
    }
  };

  return (
    <div>
      {Metamask ? (
        <>
          <Navbar
            mostrasBalance={balance}
            mostrarCuenta={account}
            conectarWallet={conectarWallet}
          ></Navbar>

          <Form contrato={contract} direccion={account}></Form>
          <listarRegistro listarInformacionEstudios={listarInformacionEstudios}
          ></listarRegistro>
        </>
      ) : (
        <h1>Intalar Wallet</h1>
      )}
    </div>
  );
}

export default App;
