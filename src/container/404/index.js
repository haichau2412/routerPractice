import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

export default function Error() {
    return (
        <div>
            <p>404 there're something wrong</p>
            <NavLink exact activeStyle={{
                backgroundColor: 'black',
                color: 'red'
            }} to='/' >Trang chu</NavLink>
        </div>)
}
