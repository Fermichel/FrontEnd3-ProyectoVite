import {useState} from 'react'

const C7Hook = () => {
    const [elementos, setElementos] = useState([]);
    const [articulos, setArticulos] = useState([]);

    const agregarElemento = () => {
      const nuevoElemento = `El punto ${elementos.length + 1} ha sido añadido a la lista.`;
      setElementos([...elementos, nuevoElemento]);
    }
  
    const agregarArticulo = () => {
      const nuevoElemento = `El articulo ${articulos.length + 1} ha sido añadido a la lista.`;
      setArticulos([...articulos, nuevoElemento]);
    }
  
    return (
      <div>
        <button onClick={agregarElemento}>Añadir punto</button>
        <button onClick={agregarArticulo}>Añadir artículo</button>
        <ul>
          {elementos.map((elemento, index) => (
            <li key={index}>{elemento}</li>
          ))}
          {articulos.map((articulo, index) => (
            <li key={index}>{articulo}</li>
          ))}
        </ul>
        
    </div>
    );
}

export default C7Hook
