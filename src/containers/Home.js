import React from 'react';
import './Home.css';

export default class Home extends React.Component {
    render(){
        return(
            <div className="Home">
                <div className="lander">
                    <h1>Note Taker Supreme</h1>
                    <p>A far from simple note taking app!</p>
                </div>
            </div>
        )
    }
}