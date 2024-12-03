import '../assets/CSS/layout.css';
import React from 'react';
import { useState } from 'react';

export default function Product({ flower, addToCart }) {
    const [quantity, setQuantity] = useState(0); // Initialize quantity as a number

    const handleAddtoCart = (e) => {
        e.preventDefault();
        if (quantity > 0) {
            addToCart(flower, quantity);
            setQuantity(0); // Reset the quantity to 0 after adding to cart
        }
    };

    return (
        <div className="grid-item">
            <div className="card">
                <img
                    src={require(`../assets/image/${flower.img}`)}
                    alt={flower.name}
                />
                <div className="card-body">
                    <h5 className="card-title">Price: {flower.price}</h5>
                    <div className="quantity-container">
                        <label htmlFor="quantity">Quantity:</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                    </div>
                    <button className="card-button" onClick={handleAddtoCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
