import React from 'react';
import "./App.css";
import { Route, Switch } from 'react-router-dom';
import Navbar from './composants/Navbar/Navbar';
import Home from './composants/Navbar/pages/Home';
import Posts from './composants/Navbar/pages/Posts';
import Like from './composants/Navbar/pages/Like';


 

function App() {
  return (

      <div className="App">
         <Navbar />
      
     
      

      <Switch>  
        
        <Route path="/home"  component={Home} />
        <Route path="/posts"  component={Posts} />
        <Route path="/like"  component={Like} />


        

      </Switch>

      </div>
  );
}

export default App;