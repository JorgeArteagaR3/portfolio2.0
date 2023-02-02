import "./App.css";
import Hero from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Skills } from "./components/Skills/Skills";

function App() {
    return (
        <div className="app relative">
            <Navbar />
            <main className="text-center">
                <Hero />
                <Skills />
            </main>
        </div>
    );
}

export default App;
