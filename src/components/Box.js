import React from 'react'
import {TbTruckDelivery} from 'react-icons/tb'
import {SiGumroad} from 'react-icons/si'
import {LuDollarSign} from 'react-icons/lu'
import {BsBookmarkCheck} from 'react-icons/bs'
import {Button} from 'antd'
import { Link } from 'react-router-dom'



const Box = () => {
  return (
    <section className='box-section'>
        <div className="container">
            <div className="box">
                <div className="content">
                    <Link to ='/création-avis-passage'>
                    <div className="icon">
                        <BsBookmarkCheck fontSize="6.5rem"/>
                    </div>
                    </Link>
                    <div className="text">
                        <h3>Creer un avis de passage</h3>
                        {/* <Link to = '/nouvelle-commande'> <Button type="primary" shape="round" >GO</Button></Link> */}
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="box">
                <div className="content">
                <Link to ='/consulter-avis-passage'>
                    <div className="icon">
                        <SiGumroad fontSize="6.5rem"/>
                    </div>
                </Link>
                    <div className="text">
                        <h3>Consulter les avis de passages </h3>
                        {/* <Link to = '/commande-en-cours'> <Button type="primary" shape="round" >GO</Button> </Link> */}
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="box">
                <div className="content">
                <Link to ='/création-avis-passage'>
                    <div className="icon">
                        <LuDollarSign fontSize="6.5rem"/>
                    </div>
                </Link>
                    <div className="text">
                        <h3>Statistique de ventes</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Box