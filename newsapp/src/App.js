
import './App.css';
import Navbar from './componants/Navbar'; 
import News from './componants/News';
import { BrowserRouter as  Router, Routes , Route } from "react-router-dom";


import React, { Component } from 'react'


export default class App extends Component {

  render() {
    return (
      <>
   <div>
   
   <News pageSize={5} country="in" category="science"/>


        
   </div>
    </> 

  )
  }
}
