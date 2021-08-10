import { Footer } from "./components/Footer/Footer";
import "./App.css";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { BlogPage } from "./pages/BlogPage/BlogPage";

export function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <BlogPage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </main>
        <Footer year={new Date().getFullYear()} />
      </div>
    </BrowserRouter>
  );
}
