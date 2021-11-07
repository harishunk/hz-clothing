import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';


import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";


import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems
                .map(item => <CartItem key={item.id} item={item} />)
            }
        </div>
        <CustomButton>Go To Chechkout</CustomButton>
    </div>
);


//memoization  using cart selectors
//also refactored code by using createStructuredSelector
const mapStateToProps = createStructuredSelector(
    { cartItems: selectCartItems }
);


//removed for memoization
/*
const mapStateToProps = ({cart:{cartItems}}) =>( 
   { cartItems:cartItems}
);
*/

export default connect(mapStateToProps)(CartDropdown);