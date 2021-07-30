import React from 'react';

const MenuCard = ({ menudata }) => {
    console.log(menudata);
    return (
        <>
        <section className="main-card--cointainer">
            {
                menudata.map((curentEle) => {
                    return (
                        <>
                            <div className="card-container" key={curentEle.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{curentEle.id}</span>
                                        <span className="card-author subtle">{curentEle.category}</span>
                                        <h2 className="card-title">{curentEle.name}</h2>
                                        <span className="card-description subtle">{curentEle.description}</span>
                                        <div className="card-read">Read</div>
                                    </div>
                                    <img src={curentEle.image} alt="Images" className="card-media"/>
                                    <span className="card-tag subtle" >Order Now</span>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </section>
        </>
    )
}

export default MenuCard;