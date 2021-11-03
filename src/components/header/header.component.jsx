import React from 'react'
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';

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

const Header = ({currentUser}) => (
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
            <div className="option" onClick={()=>auth.signOut()}> Sign Out</div>:
            <Link className="option" to="/signin">Sign in</Link>}
        </div>
    </div>
);

const mapStateToProps = state =>({
    currentUser:state.user.currentUser
});

export default connect(mapStateToProps)(Header);