import Navbar from './components/Navbar';
import ItemListContainer from './container/ItemListContainer';


function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer nombre="producto 1" descrip="Toda la descripcion del Producto 1"/>
      <ItemListContainer nombre="producto 2" descrip="Toda la descripcion del Producto 2"/>
      <ItemListContainer nombre="producto 3" descrip="Toda la descripcion del Producto 3"/>
    </div>
  );
}
export default App;
