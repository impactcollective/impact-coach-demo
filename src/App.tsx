import { Route, Routes } from "react-router";
import "./App.css";
import { Chat } from "./pages/chat/Chat";
import axios from "axios";

function App() {
  const token = localStorage.getItem("token");
  axios.defaults.headers.common["token"] = token;

  return (
    <Routes>
      <Route path="/" element={<Chat />} />
    </Routes>
  );
}

export default App;
