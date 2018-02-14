import React, { Component } from 'react';
import axios from 'axios';

const API_BASE = 'https://xkcd.now.sh/';

class Xkcdapp extends Component {
    constructor(props){
        super(props)
        this.state = {}
        let candy = Math.random(20,100)
        console.log(candy)
        candy = candy * 100
        console.log(candy)
        candy = Math.floor(candy)
        console.log(candy)
        axios.get(API_BASE + candy)
        .then(res => {
            console.log(res)
            console.log(res.data.img)
            this.setState({pic:res.data.img, title: res.data.title})
            console.log(this.state)
        })

    }

    render(){
        // return <div>This is where stuff goes.</div>
        return(
            <div>
                <h1 className="main">Check out these totally sweet comics!</h1>
                <img alt="pic" src={this.state.pic} />
                <button>Click this button to get a new comic!</button>
            </div>
        )
    }



}
export default Xkcdapp;
