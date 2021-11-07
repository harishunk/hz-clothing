import { createSelector } from 'reselect';

const selectCart = state => (
    state.cart
);

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => {
        
        //console.log("being called"); to check if memoization worked
        return (cartItems.reduce(
        (accamulatedQuantity, cartItem) => accamulatedQuantity + cartItem.quantity, 0)
    )}
);