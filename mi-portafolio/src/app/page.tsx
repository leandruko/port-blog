"use client";

import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const proyectos = [
    {
      id: 1,
      nombre: "Proyecto 1",
      descripcion: "Descripción del proyecto 1.",
      imagen_url: "https://via.placeholder.com/300",
      github_url: "https://github.com/usuario/proyecto1"
    },
    {
      id: 2,
      nombre: "Proyecto 2",
      descripcion: "Descripción del proyecto 2.",
      imagen_url: "https://via.placeholder.com/300",
      github_url: "https://github.com/usuario/proyecto2"
    },
    {
      id: 3,
      nombre: "Proyecto 3",
      descripcion: "Descripción del proyecto 3.",
      imagen_url: "https://via.placeholder.com/300",
      github_url: "https://github.com/usuario/proyecto3"
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Navbar */}
      <nav className={`p-4 fixed w-full top-0 shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Mi Portafolio</h1>
          <div className="space-x-4 flex items-center">
            <a href="#proyectos" className="hover:text-blue-500">Proyectos</a>
            <a href="#contacto" className="hover:text-blue-500">Contacto</a>
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="p-2 rounded-full bg-gray-300 dark:bg-gray-700">
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-4xl font-extrabold">Hola, soy [Tu Nombre]</h2>
        <p className="text-lg mt-4">Ingeniero/Analista de Datos | Construyendo soluciones con datos</p>
      </header>

      {/* Sobre mí */}
      <section className="py-20 bg-white dark:bg-gray-800 text-center">
        <h3 className="text-3xl font-bold">Sobre mí</h3>
        <p className="mt-4 max-w-2xl mx-auto">
          Soy un apasionado por el análisis y la ingeniería de datos. Me gusta construir soluciones basadas en datos y compartir mi conocimiento.
        </p>
      </section>

      {/* Proyectos Destacados */}
      <section id="proyectos" className="py-20 text-center">
        <h3 className="text-3xl font-bold">Proyectos</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className="bg-white dark:bg-gray-800 p-4 shadow-md rounded-lg">
              {proyecto.imagen_url && (
                <img 
                  src={proyecto.imagen_url} 
                  alt={proyecto.nombre} 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h4 className="font-semibold">{proyecto.nombre}</h4>
              <p className="text-sm mt-2">{proyecto.descripcion}</p>
              {proyecto.github_url && (
                <a 
                  href={proyecto.github_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Ver en GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-white dark:bg-gray-800 text-center">
        <h3 className="text-3xl font-bold">Contacto</h3>
        <p className="mt-4">Puedes encontrarme en <a href="https://linkedin.com" className="text-blue-500">LinkedIn</a> o enviarme un correo.</p>
      </section>
    </div>
  );
}
