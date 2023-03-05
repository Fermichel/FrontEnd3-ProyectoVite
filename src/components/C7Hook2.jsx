import {useState} from 'react'
import './C7Hook.css'

const C7Hook2 = () => {
    const [materias, setMaterias] = useState([]);
    
  return (
    <div className='list'>
    <h1>Agrega la Materia que mas te gusto en DH</h1>
      <ul>
        {materias.map(materia => (
            <li>La materia {materia} se añadió en la lista</li>
        ))}
      </ul>
      <div className='contBtn'>
      <button onClick={()=> setMaterias([...materias, 'FrontEnd 1'])}>FrontEnd 1</button>
      <button onClick={()=> setMaterias([...materias, 'Informatica'])}>Informatica</button>
      <button onClick={()=> setMaterias([...materias, 'Infraestructura 1'])}>Infraestructura 1</button>
      <button onClick={()=> setMaterias([...materias, 'FrontEnd 2'])}>FrontEnd 2</button>
      <button onClick={()=> setMaterias([...materias, 'Backend 1'])}>Backend 1</button>
      <button onClick={()=> setMaterias([...materias, 'Diseño UX/UI'])}>Diseño UX/UI</button>
      <button onClick={()=> setMaterias([...materias, 'FrontEnd3'])}>FrontEnd3</button>
      <button onClick={()=> setMaterias([...materias, 'Infraestructura2'])}>Infraestructura2</button>
      <button onClick={()=> setMaterias([...materias, 'Comunicacion Efectiva'])}>Efectiva</button>
      <button onClick={()=> setMaterias([...materias, 'POO'])}>POO</button>
      <button onClick={()=> setMaterias([...materias, 'Desing Thinking'])}>Desing Thinking</button>
      <button onClick={()=> setMaterias([...materias, 'Testing I'])}>Testing I</button>
      <button onClick={()=> setMaterias([...materias, 'Learning Agility'])}>Learning Agility</button>
      <button onClick={()=> setMaterias([...materias, 'Programacion Imperativa'])}>Programacion Imperativa</button>

      </div>        
    </div>
  )
}

export default C7Hook2
