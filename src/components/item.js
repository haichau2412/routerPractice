import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default class Item extends Component {

    render() {
        const listItems = this.props.data ? this.props.data.map((item, index) => {
            return (<li key={item.id}>
                <div >
                    <p>{index}-{item.id ? item.id : null}</p>
                    <p>{item.name ? item.name : null}</p>
                    <Link to={{ pathname: `/detail/${item.id}`, data: item }}>View Detail</Link>
                </div>
            </li>)
        }) : null;
        return (
            <ul>
                {listItems}
            </ul>
        )

    }
}