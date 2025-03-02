"use client";

import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Home() {
  const [proyectos, setProyectos] = useState([]);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchProyectos = async () => {
      let { data, error } = await supabase.from("proyectos").select("*");
      
      if (error) {
        console.error("Error al obtener proyectos:", error.message);
      } else {
        console.log("Proyectos obtenidos:", data);
        setProyectos(data);
      }
    };
  
    fetchProyectos();
  }, []);
  

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
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
      <section className="py-20 bg-white text-center">
        <h3 className="text-3xl font-bold">Sobre mí</h3>
        <p className="mt-4 max-w-2xl mx-auto">
          Soy un apasionado por el análisis y la ingeniería de datos. Me gusta construir soluciones basadas en datos y compartir mi conocimiento.
        </p>
      </section>

      {/* Proyectos Destacados */}
      <section id="proyectos" className="py-20 text-center">
        <h3 className="text-3xl font-bold">Proyectos</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4">
          {proyectos.length > 0 ? (
            proyectos.map((proyecto) => (
              <div key={proyecto.id} className="bg-white p-4 shadow-md rounded-lg">
                <h4 className="font-semibold">{proyecto.nombre}</h4>
                <p className="text-sm mt-2">{proyecto.descripcion}</p>
              </div>
            ))
          ) : (
            <p>Cargando proyectos...</p>
          )}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-white text-center">
        <h3 className="text-3xl font-bold">Contacto</h3>
        <p className="mt-4">Puedes encontrarme en <a href="https://linkedin.com" className="text-blue-500">LinkedIn</a> o enviarme un correo.</p>
      </section>
    </div>
  );
}
