import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class DetailNews extends Component {
    render() {
        const test = this.props.location.data ? this.props.location.data.name : 'No data';
        return (
            <div>
                <p>{test}</p>
                <NavLink activeStyle={{
                    backgroundColor: 'black',
                    color: 'red'
                }} to='/' >Trang chu</NavLink>
            </div >
        );
    }
}

export default DetailNews;