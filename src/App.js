import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainRoute from "./Route/MainRoute";
import AuthRoute from "./Route/AuthRoute";

function App() {
  return (
    <BrowserRouter>
        <AuthRoute />
        <MainRoute />
        
    </BrowserRouter>
  );
}

export default App;
