import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';


import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";



import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemsCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector(
    {
        itemsCount: selectCartItemsCount
    }
);


//removed as using slectors for memoization
/*
const mapStateToProps = ({ cart: { cartItems } }) => {
    console.log("being called");
    return (
    {
        itemsCount: cartItems.reduce(
            (accamulatedQuantity, cartItem) => accamulatedQuantity + cartItem.quantity, 0)
    }
)}
*/


export default connect(mapStateToProps,
    mapDispatchToProps)(CartIcon);