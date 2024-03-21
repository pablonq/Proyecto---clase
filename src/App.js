//import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio';
import testimonios from '../src/componentes/data';
import React from 'react';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        {testimonios.map((testimonio, index) => (
            <Testimonio
              key={index}
              nombre={testimonio.nombre}
              pais={testimonio.pais}
              imagen={testimonio.imagen}
              alt={testimonio.alt}
              cargo={testimonio.cargo}
              empresa={testimonio.empresa}
              testimonio={testimonio.testimonio}
            />
            ))}
            {/* <Testimonio
         nombre='Juan'
         pais='Cipo'
         imagen='juan'
         alt='Imagen de Juan'
         cargo='Ingeniero de software'
         empresa='Amazon'
         testimonio='Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.' /> 
        <Testimonio
         nombre='Marta'
         pais='Plottier'
         imagen='marta'
         alt='Imagen de Marta'
         cargo='Ingeniero de software'
         empresa='Amazon'
         testimonio='freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.' /> 
         
        <Testimonio
        nombre='Susana'
        pais='Neuquen'
        imagen='susana'
        alt='Imagen de Susana'
        cargo='Ingeniero de software'
        empresa='Spotify'
        testimonio='Ive always struggled with learning JavaScript. Ive taken many courses but freeCodeCamps course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.' /> 
    */}      </div>
      </div>
    );

  }
}



export default App;
