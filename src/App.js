import Router from './components/Router';
import cartProvider from './components/useContext';



function App() {
  return (
    <div>
      <cartProvider>
      <Router/>
      </cartProvider>
    </div>
  );
}
export default App;
