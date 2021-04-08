import { Footer } from './components/Footer/Footer';
import './App.css';
import { Header } from "./components/Header/Header";
import { BlogContent } from './components/BlogContent/BlogContent';

export function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BlogContent />
      </main>

      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

