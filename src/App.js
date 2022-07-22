import { ethers } from "ethers"
import { useState } from 'react';
import Greeter from "./artifacts/contracts/Greeter.sol/Greeter.json"
import Loader from "./Loader";

const greeterAddress = "0xE2C1364498675ED5EfDe451E455a9aD2800A4474";

function App() {
  const [greeting, setGreetingValue] = useState("");
  const [loading, setloading] = useState(false)

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" }); // prompt the user to connect one of their metamask accounts if they haven't  already connected
  }
  async function setGreeting() {
    if (!greeting) return
    if (typeof window.ethereum !== "undefined") {
      setloading(true);
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer);
      const transaction = await contract.setGreeting(greeting);
      setGreetingValue("")
      await transaction.wait();
      console.log("Greeting is SET!")
      setloading(false)
    }
    else {
      alert("Install Metamask to continue")
    }
  }

  // this function is going to connect to the metamask account of the user
  async function fetchGreeting() {
    if (typeof window.ethereum !== 'undefined') {
      setloading(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
      try {
        const data = await contract.greet()
        console.log("the fetched data = ", data);
        document.getElementById("message").innerHTML = `Fetched Greeting : ${data}`;
      } catch (err) {
        console.log("error : ", err);
      }
      setloading(false);

    }
    else {
      alert("Please install metamask to continue..")
    }
  }

  return (
    <div className="bg-slate-500 flex flex-col justify-center items-center">
      <h1 className="mt-8 text-5xl">Set and Fetch Greet - Decentralised App</h1>
      <div>Network - Fantom Test</div>
      <div className="flex justify-center h-screen items-center flex-col -mt-10">
        <button className='bg-blue-300 p-1 px-2 mt-3 rounded-lg h-fit animate-pulse' onClick={fetchGreeting}>Fetch Greeting</button>


        <button className='bg-blue-300 p-1 px-2 mt-3 rounded-lg h-fit animate-pulse' onClick={setGreeting}>Set Greeting</button>

        {loading && <Loader />}

        <input type="text" className="mt-2 p-2 rounded-xl" onChange={e => setGreetingValue(e.target.value)} placeholder="Set Greeting" value={greeting} />

        <div className="mt-2 text-black" id="message"></div>
      </div>
    </div>

  );
}

export default App;
