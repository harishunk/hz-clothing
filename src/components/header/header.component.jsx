import React from 'react'
import { Link } from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.styles.scss'

const linksData =[
    {
        id:1,
        name:'Shop',
        url:'/shop'
    },
    {
        id:2,
        name:'Contact',
        url:'/contact'
    },
    {
        id:3,
        name:'Cart',
        url:'/cart'
    }
]

const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo />
        </Link>
        <div className="options">
            {linksData.map(({id, name, url}) =>(
                <Link key={id} className="option" to={url}>
                    {name}
                </Link>
            ))}           
        </div>
    </div>
);

export default Header;