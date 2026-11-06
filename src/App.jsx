import { useState } from 'react';
import Boton from './components/Boton.jsx';
import FilaEstudiante from './components/FilaEstudiante.jsx';

function App() {
  const [estudiantes, setEstudiantes] = useState([
    { id: 1, nombre: 'Ana', nota: 4.5 },
  ]);
  const [nombre, setNombre] = useState('');

  function agregarEstudiante() {
    const nombreLimpio = nombre.trim();
    if (!nombreLimpio) return;

    const nuevoEstudiante = {
      id: Date.now(),
      nombre: nombreLimpio,
      nota: 3.2,
    };

    setEstudiantes((actuales) => [...actuales, nuevoEstudiante]);
    setNombre('');
  }

  return (
    <main>
      <h1>Sistema académico</h1>

      <label htmlFor="nombre">Nombre del estudiante</label>
      <input
        id="nombre"
        value={nombre}
        onChange={(evento) => setNombre(evento.target.value)}
        placeholder="Escribe un nombre"
      />

      <Boton alHacerClic={agregarEstudiante}>Agregar estudiante</Boton>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Nota</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((estudiante) => (
            <FilaEstudiante key={estudiante.id} estudiante={estudiante} />
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default App;
