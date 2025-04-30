import React from 'react';
import './About.css'; // Importa el CSS

function About() {
  return (
    <div className="about-container">
      <h1>Acerca de mí</h1>
      <div className="about-content">
        <div className="about-text">
          <h2>Información del Estudiante</h2>
          <p>
            ¡Hola! Soy <strong>Darwin Andres Hernandez Herrera</strong>, un estudiante apasionado por el desarrollo web y la creación de soluciones digitales innovadoras. Actualmente estoy cursando mis estudios en la <em>USB CALI</em> y me enfoco en crear aplicaciones que sean tanto funcionales como visualmente atractivas.
          </p>
          <p>
            Este proyecto de <strong>FuturamaWEB</strong> es un ejemplo de cómo combino mis habilidades en diseño web, desarrollo front-end y experiencia de usuario para crear interfaces interactivas y modernas. Algunas de las tecnologías que he utilizado en este proyecto son: React, React Router DOM, Vite y CSS.
          </p>
          <p>
            ¡Gracias por visitar mi proyecto! Estoy siempre buscando mejorar y aprender más sobre desarrollo web, así que cualquier retroalimentación es más que bienvenida.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

