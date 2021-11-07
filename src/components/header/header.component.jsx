import React from 'react'
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartDropdownHidden } from '../../redux/cart/cart.selectors';



import './header.styles.scss'

const linksData = [
    {
        id: 1,
        name: 'Shop',
        url: '/shop'
    },
    {
        id: 2,
        name: 'Contact',
        url: '/contact'
    },
    {
        id: 3,
        name: 'Cart',
        url: '/cart'
    }
]

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo />
        </Link>
        <div className="options">
            {linksData.map(({ id, name, url }) => (
                <Link key={id} className="option" to={url}>
                    {name}
                </Link>
            ))}

            {currentUser ?
                <div className="option" onClick={() => auth.signOut()}> Sign Out</div> :
                <Link className="option" to="/signin">Sign in</Link>}
        </div>
        <CartIcon />
        {
            hidden ? null : <CartDropdown />
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartDropdownHidden
})

export default connect(mapStateToProps)(Header);