import React from 'react'

export default function Product(props) {
    const { product} = props
    return (
        <div>
            <h2>
                my product id {product.id} ,
                name {product.name} ,
                price {product.price}
            </h2>
        </div>
    )
}
