import React from 'react';
import { useSelector } from 'react-redux';
import { Button} from 'antd';

const CheckAvis = () => {
    const { nom, date, comment } = useSelector((state) => state.data);
  
    return (
      <section className='avis'>
        <div className='avis-container'>
            <h2>Avis de passage n°</h2>
            <p>Nom: {nom}</p>
            <p>Date: {date && date.format('DD/MM/YYYY')}</p>
            <p>Commentaire: {comment}</p>
            <hr />
            <div className='btn'>
            <Button>Supprimer tout les avis de passage</Button>
            </div>
        </div>
        
      </section>
    );
  };
export default CheckAvis