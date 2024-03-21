import React from 'react';
import '../estilos/Testimonio.css';

class Testimonio extends React.Component{
  render(){ /**metodo obligatorio */
  return( //retorna JSX
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
      src={require(`../imagenes/${this.props.imagen}.png`)} /*se utilizan comillas invertidas permite insertar js en la cadena de caracteres*/ 
      alt={this.props.alt} />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{this.props.nombre}</strong> de {this.props.pais}</p>
        <p className='cargo-testimonio'>{this.props.cargo} en <strong>{this.props.empresa}</strong></p>
        <p className='texto-testimonio'>"{this.props.testimonio}"</p> 
      </div>
    </div>
  );

  }
}


export default Testimonio; //La exportacion por defecto indica que "Testimonio" va a ser el unico componente que va ser exportado de este archivo, la otra opcion seria usar exportacion nombrada.