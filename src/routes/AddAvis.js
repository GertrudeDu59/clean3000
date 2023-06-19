import React from 'react'
import Formulaire from '../components/Formulaire'
import i2 from '../img/i2.jpg'

const AddAvis = () => {
  return (
    <section className='form-containner'>
        <div className="img">
            <img src= {i2} alt="" />
        </div>
        <div className="form">
            <Formulaire/> 
        </div>
    </section>
  )
}

export default AddAvis