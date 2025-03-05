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

    return (
        <>
            <ul>
                {
                    products.map(product => (
                        <li key={product.id}>
                            {product.name} ({product.count})
                            <button>+</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
