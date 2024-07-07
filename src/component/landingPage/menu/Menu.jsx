import React, { useEffect, useState } from 'react'
import Title from '../../common/Title'
import { key } from 'localforage';

const Menu = () => {
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
         .then(res =>res.json())
         .then(info => setProduct(info))
    },[])
  return (
    <div>
        <div className="menu_body grid justify-center justify-items-center space-y-10">
            <Title head='coffee menu'></Title>
            <div className="item grid md:grid-cols-5 justify-center justify-items-center gap-10 md:gap-20">
               {
                product.map(xxx => <MenuCard key={xxx.id} items={xxx}></MenuCard>)
               }
            </div>
        </div>
    </div>
  )
}

const MenuCard =({items})=>{
    const {name,price,image} = items
    return(
        <div className=' grid grid-cols-2 justify-center justify-items-center items-center gap-4 md:gap-8'>
           <div className="img_content">
             <img src={image} alt="" />
           </div>
           <div className="text_content">
             <h1>{name}</h1>
             <p>{price}</p>
           </div>
        </div>
    )
}

export default Menu 