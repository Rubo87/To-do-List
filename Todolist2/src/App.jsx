import { useState } from 'react'
import './App.css'
import React from 'react';
import TodoList from './components/TodoList';
import NavBar from './components/NavBar';

function App() {

  return (
  <div className="App">
  <NavBar />
  <TodoList />
  </div>
  ); 
 }
 export default App;
