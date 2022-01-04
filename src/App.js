import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './Components/Home';
import Header from './Layouts/Header';
function App() {
  return (
  <div className="App">   
 <Header/> 
 <Home/>

    </div>
  );
}
export default App;
