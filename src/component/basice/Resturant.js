import React from 'react';
import './style.css'
import MenuApi from './MenuApi.js'

const Resturant = ()=>{
    return(
        <>
            <div className="card-container">
                <div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle subtle">1</span>
                        <span className="card-author subtle">Brackfast</span>
                        <h2 className="card-title">Maggi</h2>
                        <span className="card-description subtle">i love meggi and this is awesome it is very hard of tha country. bangladash maggi is awesome of food department.maggi is a verry hard fool maggi ogf our country in the world.bangladash maggi is awesome of food department.maggi is a verry hard fool maggi ogf our country in the world.</span>
                        <div className="card-read">Read</div>
                    </div>
                    <img src={image} alt="Images" className="card-media"/>
                    <span className="card-tag subtle" >Order Now</span>
                </div>
            </div>
        </>
    )
}

export default Resturant;