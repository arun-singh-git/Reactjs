import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Contact from './Contact';
import About from './About';
import './Home.css';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Menu />  
    <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/about" component={About} />
     <Route path="/contact" component={Contact} />
     </Switch>
     </BrowserRouter>
  );
}
const Home = () => {

  return (
     <div className="homestyle"> 
        <h2> This is the Home Page. </h2>
      </div>
    )

}


export default App;
