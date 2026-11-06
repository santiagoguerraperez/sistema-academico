import estaAprobado from '../estaAprobado.js';

export default function FilaEstudiante({ estudiante }) {
  const aprobado = estaAprobado(estudiante.nota);

  return (
    <tr>
      <td>{estudiante.nombre}</td>
      <td>{estudiante.nota.toFixed(1)}</td>
      <td>{aprobado ? 'Aprobado' : 'Reprobado'}</td>
    </tr>
  );
}
