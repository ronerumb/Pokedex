import { MainRoutes } from "./Routes/MainRoutes";
import  './App.css'
import logo from './Img/logo-pokemon.png'

function App() {
  return (
    <div className="Container">
      <div className="Menu"><img src={logo} alt="" /></div>
   <MainRoutes />
   </div>
  );
}

export default App;
