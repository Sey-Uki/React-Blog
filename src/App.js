import { Footer } from "./components/Footer/Footer";
import "./App.css";
import { Header } from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Routes } from "./components/Routes/Routes";

export function App() {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  return (
    <BrowserRouter>
      <div className="App">
        {isLoggedIn && <Header />}
        <main className="container">
          <Routes />
        </main>
        <Footer year={new Date().getFullYear()} />
      </div>
    </BrowserRouter>
  );
}
