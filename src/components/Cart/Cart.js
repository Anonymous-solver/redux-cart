import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";

const Cart = (props) => {
  const { cart, removeFromCart } = props;
  return (
    <div>
      <h3>This is Cart</h3>
      <ul>
        {cart.map((pd) => (
          <li key={pd.cartId}>
            {pd.name}
            <span style={{ margin: "5px" }}>
              <button onClick={() => removeFromCart(pd.cartId)}>remove</button>
            </span>
			<br />	<br />
          </li>
        )
		)}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
