import './App.scss';
import About from './components/Box';
import ilustration from "./img/ilustration.jpg"
import { Button} from 'antd';
import React, { Fragment } from 'react'

const App = () => {
  return (
    <>
    <section className="hero-banner">
      <div className="hero-banner-container">
        <div className="hero-banner-text">
          <h1>Pureté éthique et écologique : votre solution de nettoyage de vitres</h1>
          <h2>Révélez la clarté éthique et écologique à travers nos services de nettoyage de vitres, car chaque vue mérite d'être immaculée</h2>
          <Button>En savoir plus</Button>
        </div>
        <div className="hero-banner-logo">
          <img src= {ilustration} alt=""className='logo' />
        </div>
      </div>
    </section>
    <About/>
    </>
  )
}

export default App
