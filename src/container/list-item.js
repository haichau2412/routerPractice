import React, { Component } from 'react';
import Item from '../components/item';

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    name: "Nam"
                },
                {
                    id: 2,
                    name: "Cuong"
                }
            ]
        }
    }


    render() {
        return (
            <>
                <Item data={this.state.data} getData={this.getDataDetail} />
            </>
        )
    }
}