import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Charging from "./components/Charging";
import Succesfully from "./components/Succesfully";

function App() {
  const [fileURL, setFileURL] = useState("");
  const [charging, setCharging] = useState(false);
  return (
    <>
      {!charging ? (
        <Form setFileURL={setFileURL} setCharging={setCharging} />
      ) : fileURL.length === 0 ? (
        <Charging />
      ) : (
        <Succesfully fileURL={fileURL} />
      )}
    </>
  );
}

export default App;
