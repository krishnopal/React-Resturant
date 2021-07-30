import React, {useState} from 'react';
import './style.css'
import MenuApi from './MenuApi.js'
import MenuCard from './MenuCard';

const Resturant = ()=>{
    const [menuData, setMenuData] = useState(MenuApi)

    const filterItem = (category)=>{
        const UpdateList = MenuApi.filter((curentEle)=>{
            return curentEle.category === category;
        });
        setMenuData(UpdateList);
    };

    return(
        <>
            <nav className="navbar">
                <div className="btn-group">
                    <button onClick={()=>filterItem('Brackfrist')} className="btn-group__item">Brackfast</button>
                    <button onClick={()=>filterItem('Lunch')}  className="btn-group__item">Lunch</button>
                    <button onClick={()=>filterItem('Dinnar')}  className="btn-group__item">Dinnar</button>
                    <button onClick={()=>setMenuData(MenuApi)} className="btn-group__item">All</button>
                </div>
            </nav>
            <MenuCard menudata={menuData}/>
        </>
    )
}

export default Resturant;