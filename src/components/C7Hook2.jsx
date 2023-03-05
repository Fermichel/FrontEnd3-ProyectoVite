import {useState} from 'react'
import './C7Hook.css'

const C7Hook2 = () => {
    const [materias, setMaterias] = useState(['FrontEnd','BackEnd','Infraestructura', 'Diseño UX/UI','Base de Datos']);
    const [agregarMateria, setAgregarMateria] = useState(0);

    const addMaterias = () =>{
        setMaterias([...materias, materias[agregarMateria]])
        if(agregarMateria === materias.length -1) setIndex(0)
        else setAgregarMateria(agregarMateria+1);

    }
  return (
    <div className='list'>
    <h1>Agrega la Materia de DH</h1>
      <ul>
        {materias.map((materia, i) => (
            <li key = {i}>La materia {materia} se añadió en la lista</li>
        ))}
      </ul>
      <div className='contBtn'>
        <button onClick={addMaterias}>Materia Sorpresa de DH</button>
      </div>        
    </div>
  )
}

export default C7Hook2
