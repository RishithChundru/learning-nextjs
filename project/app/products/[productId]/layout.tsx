import React from "react"



export default function ProductDetailslayout({
    children,
}:{
    children: React.ReactNode;
}){
    return(
        <>
        {children}
        <h2>Featured Products</h2>
        </>
    )
}