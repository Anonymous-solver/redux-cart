const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const addToCart = (id, name) => {
	return {type: ADD_TO_CART, id, name}
}

const removeFromCart = cartId => {
	return {type: REMOVE_FROM_CART, cartId}
}

export {ADD_TO_CART, REMOVE_FROM_CART, addToCart, removeFromCart};