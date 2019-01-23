import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar/navbar';
import CardComponent from './card/card';
import CardData from './card/carddata';
ReactDOM.render(
    <span>
        <NavBar></NavBar>
      <CardData></CardData>
        </span>
        ,document.getElementById('root'))