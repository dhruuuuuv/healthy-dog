import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './App.css'
import WeightSelector from './WeightSelector.js'
import ChocolateSelector from './ChocolateSelector.js'
import Grid from '@material-ui/core/Grid';


class Toxicity extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        if (isNaN(this.props.toxicity) || this.props.toxicity === 0) {
            return <div><br/>Enter some values.</div>
        }
        else if (this.props.toxicity < 20) {
            return (
                <div>
                    <h1>Amount of Toxic Ingredient Consumed:</h1>
                    <div className="tox"><h1>{this.props.toxicity}</h1></div> mg / pound of dog
                    <div className="good">
                        <h1>This indicates your dog is fine, and has not consumed a lethal dose.</h1>
                    </div>
                </div>
            );
        }
        else if (this.props.toxicity >= 20) {
            return (
                <div>
                    <h1>Amount of Toxic Ingredient Consumed:</h1>
                        <div className="tox"><h1>{this.props.toxicity}</h1></div> mg / pound of dog
                    <div className="bad">
                        <h1>Your dog has potentially eaten a lethal amount, and you should consult a vet immediately.</h1>
                    </div>
                </div>
                
            );
        }

    }
}

export default Toxicity;
