import '../assets/CSS/layout.css';
import Rect from 'react';
import {useState} from 'react';
export default function Product({flower, addToCart}){
    
    return(
        <div className="grid-item">

            <div class="card">
                <img src={require('../assets/image/'+ flower.img)} alt={flower.name}/>
                <div class="card-body">
                    <h5 class="card-title">Price:{flower.price}</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}/>
                    </div>
                    <button class="card-button" onClick="handleAddtoCart">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}