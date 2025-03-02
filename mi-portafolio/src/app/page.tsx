import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 fixed w-full top-0">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Mi Portafolio</h1>
          <div className="space-x-4">
            <a href="#proyectos" className="hover:text-blue-500">Proyectos</a>
            <a href="#contacto" className="hover:text-blue-500">Contacto</a>
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
          {/* Aquí se cargarán proyectos dinámicamente */}
          <div className="bg-white p-4 shadow-md rounded-lg">Proyecto 1</div>
          <div className="bg-white p-4 shadow-md rounded-lg">Proyecto 2</div>
          <div className="bg-white p-4 shadow-md rounded-lg">Proyecto 3</div>
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
