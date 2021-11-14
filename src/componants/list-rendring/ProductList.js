import React from 'react'
import Product from './Product'

export default function ProductList() {
    const products = [
        {
            id: 100,
            name: 'mobile',
            price: 7000
        },
        {
            id: 101,
            name: 'ipad',
            price: 8000
        },
        {
            id: 102,
            name: 'tap',
            price: 9000
        },
    ]

    const productList = products.map(
        product =>
            <Product key={product.id} product={product} />
    )
    return (
        <div>
            {productList}
        </div>
    )
}
