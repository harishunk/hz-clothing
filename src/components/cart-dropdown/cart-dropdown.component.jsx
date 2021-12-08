import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createStructuredSelector } from 'reselect';


import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";


import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        {cartItems.length ?
            (<div className="cart-items">
                {cartItems
                    .map(item => <CartItem key={item.id} item={item} />)
                }
            </div>)
            :
            (<span className="empty-message">
                Your cart is empty
            </span>)
        }
        <CustomButton
            onClick={() => {
                dispatch(toggleCartHidden());
                history.push('/checkout');
            }
            }>Go To Checkout</CustomButton>
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

export default withRouter(connect(mapStateToProps)(CartDropdown));