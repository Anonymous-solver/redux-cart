import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import Product from '../Product/Product';

const Shop = (props) => {
	const {products, addToCart} = props
	return (
		<div>
			{
				products.map(pd=> <Product key ={pd.id} product={pd} addToCart={addToCart}></Product>)
			}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		products: state.products
	}
}

const mapDispatchToProps = {
	addToCart: addToCart
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// connectToStore(Shop)

export default connect(mapStateToProps, mapDispatchToProps)(Shop);

// export default Shop;