import React from "react";
import axios from "axios";

function App() {
  const getInput = async (value) => {
    const { data } = await axios.get("/get-input", {
      params: { input: value },
    });
    console.log(data);
  };

  return (
    <>
      <input
        onChange={(e) => getInput(e.target.value)}
        placeholder="input keyword"
        type="text"
      />
    </>
  );
}

export default App;
