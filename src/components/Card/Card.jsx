import React from "react";
import  "./style.css"

const Card=({productos})=>{
    const {description, img, name, price, stock}= productos || {};
    return(
        <div className="card" >
            <img src={img} alt={name} />
            <div className="card--content">
                <h2 className="card--name">{name}</h2>
                <p className="card--description">{description}</p>
                <p className="card--price">{price}</p>
                <p className="card--stpck">{stock}</p>
            </div>
            <div className="card--content-button">
                <button className="card--content-button__minus">-</button>
                <input type="text" className="card--content-button__input"/>
                <button className="card--content-button__plus">+</button>
            </div>
        </div>
    )
}
export default Card;