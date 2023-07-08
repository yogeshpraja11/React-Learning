import React from "react";

const CartContext=React.createContext({ //using cart context because cart info is to be used or updated everywhere
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
});

export default CartContext;