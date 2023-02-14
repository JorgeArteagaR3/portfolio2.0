import React from "react";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Skills } from "./components/Skills/Skills";
import { useState } from "react";
import Projects from "./components/Projects/Projects";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div
            className={
                isModalOpen
                    ? "app relative w-screen h-screen overflow-hidden"
                    : "app relative"
            }
        >
            <Navbar
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
            <main className="text-center">
                <Hero />
                <Skills />
                <Projects />
            </main>
            <Footer />
        </div>
    );
}

export default App;
