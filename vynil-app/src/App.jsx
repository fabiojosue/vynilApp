import { useState } from 'react'
import VynilList from './VynilList.jsx'
import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <h1>Vinyl Collection</h1>
      <VynilList />
    </div>
  );
};

export default App
