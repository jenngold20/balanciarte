import React from 'react';

function Contact() {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Información de Contacto</h3>
            <p className="text-gray-600">
              <strong>Dirección:</strong> 123 Calle Principal, Ciudad<br />
              <strong>Teléfono:</strong> (123) 456-7890<br />
              <strong>Correo Electrónico:</strong> info@balanciarte.com
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Formulario de Contacto</h3>
            {/* Agrega aquí tu formulario de contacto */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;