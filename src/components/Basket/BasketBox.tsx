import React from 'react';

function BasketBox(props: any) {
    const style = {
        color: "white"
    }
    return (
        <div style={style} className="basket-box">
            <img className="product-image-in-basket" src={props.img} />
            <h1>{props.name}</h1>
            <h2>$ {props.price}</h2>
            <h1 onClick={props.delete}>X</h1>
        </div>
    )
}

export default BasketBox;
