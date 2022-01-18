import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './Components/Home';
import Header from './Components/Header';
import { connect } from "react-redux";  
import { startAction } from "./Actions/startAction";
import { stopAction } from "./Actions/stopAction";
// import store from './store';

// store.subscribe (()=> console.log(store.getState()));


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}
export default App;
