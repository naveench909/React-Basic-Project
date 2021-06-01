const reducer = (state, action)=>{
    if(action.type === 'CLEAR_CART' ){
        return{
            ...state,
            cart:[],
        }
    }

    if(action.type === 'REMOVE' ){
        const newCart = state.cart.filter((item)=> item.id !== action.payload)
        return{
            ...state,
            cart:newCart,
        }
    }
    if(action.type === 'INCREASE' ){
        const newCart = state.cart.map((item)=> {
            if(item.id === action.payload){
                return{...item, amount:item.amount+1}
            }
            return item;
        })
        return{
            ...state,
            cart:newCart,
        }
    }

    if(action.type === "DECREASE"){
        const newCart = state.cart.map((item)=>{
            if(item.id === action.payload){
                return{...item , amount : item.amount-1}
            }
            return item
        }) .filter((cartItem)=>cartItem.amount !== 0);
        return ({
            ...state,
            cart:newCart
        })
    }
    
    if(action.type === "TOGGLE_BUTTON"){
        const newCart = state.cart.map((item)=>{
            if(item.id === action.payload.id){
                if(action.payload.btn === "inc"){
                    return{...item , amount : item.amount+1}
                }
                if(action.payload.btn === "dec"){
                    return{...item , amount : item.amount-1}
                }
            }
            return item
        }).filter((cartItem)=>cartItem.amount !== 0);
        return{
            ...state,
            cart : newCart}
    }

    if(action.type === "GET_TOTALS"){
        let {total , amount} = state.cart.reduce(
            (cartTotal , cartItem)=>{
                const {price , amount} = cartItem;
                const itemTotal = price * amount;

                cartTotal.total += itemTotal; 
                cartTotal.amount += amount; 
                return cartTotal
            },
            {
                total:0,
                amount:0
            }
        )
        total = parseFloat(total.toFixed(2));
        return({...state, total, amount})
    }

    if(action.type === "LOADING"){
        return{...state , loading:true}
    }

    if(action.type === "DISPLAY_ITEM"){
        return{...state, cart : action.payload , loading:false}
    }
    
    
    throw new Error("no matching action type")
}

export default reducer; 