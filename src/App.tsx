import React from "react";
import "./App.css";
import { Contact } from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Skills } from "./components/Skills/Skills";
import { useState } from "react";
import Projects from "./components/Projects/Projects";
import Modal from "./components/modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div
      className={
        isModalOpen
          ? "app relative w-screen h-screen overflow-hidden"
          : "app relative overflow-hidden"
      }
    >
      <div className="w-screen py-12">
        <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        <Hero />
      </div>
      <main className="text-center">
        <Skills />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
