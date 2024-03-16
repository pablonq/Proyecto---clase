/* import React from 'react'; */
import '../estilos/Testimonio.css';

function Testimonio(props){
  return( //retorna JSX
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
      src={require(`../imagenes/${props.imagen}.png`)} /*se utilizan comillas invertidas permite insertar js en la cadena de caracteres*/ 
      alt={props.alt} />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> de {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p> 
      </div>
    </div>
  )
}

export default Testimonio; //La exportacion por defecto indica que "Testimonio" va a ser el unico componente que va ser exportado de este archivo, la otra opcion seria usar exportacion nombrada.