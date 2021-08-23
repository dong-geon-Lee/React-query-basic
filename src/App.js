import React from "react";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import "./App.css";

function App() {
  const { isLoading, isError, data } = useQuery("dogs", () =>
    axios("https://random.dog/woof.json")
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error: {isError}, try again!</h1>;

  const { url } = data.data;

  return (
    <div className="App">
      <h1>Hello</h1>
      <img src={url} style={{ width: "250px" }} alt="" />
    </div>
  );
}

export default App;
