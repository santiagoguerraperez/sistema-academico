export default function Boton({ children, alHacerClic }) {
  return <button onClick={alHacerClic}>{children}</button>;
}
