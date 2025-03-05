import React, { useState } from 'react'

const initialProducts = [{
    id: 0,
    name: 'Baklava',
    count: 1,
}, {
    id: 1,
    name: 'Cheese',
    count: 5,
}, {
    id: 2,
    name: 'Spaghetti',
    count: 2,
}];

export default function ShoppingCart() {
    const [products, setProduct] = useState(initialProducts)

    const handleIncreaseClick = (id) => {
        setProduct(products.map(product => {
            if (product.id === id) {
                return { ...product, count: product.count + 1 }
            }

            return product
        }))
    }

    return (
        <>
            <ul>
                {
                    products.map(product => (
                        <li key={product.id}>
                            <span>{product.name} - ({product.count})</span>
                            <button onClick={() => handleIncreaseClick(product.id)}>+</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
