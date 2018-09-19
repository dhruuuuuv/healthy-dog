import React, { Component } from 'react';
import './App.css'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const list = [
    "Alcoholic beverages ",
    "Apple seeds ",
    "Apricot pits ",
    "Avocados",
    "Cherry pits",
    "Candy (particularly chocolate—which is toxic to dogs, cats, and ferrets—and any candy containing the toxic sweetener Xylitol) ",
    "Coffee (grounds, beans, and chocolate-covered espresso beans)",
    "Garlic",
    "Grapes ",
    "Gum (can cause blockages and sugar free gums may contain the toxic sweetener Xylitol)",
    "Hops (used in home beer brewing) ",
    "Macadamia nuts ",
    "Moldy foods ",
    "Mushroom plants ",
    "Mustard seeds ",
    "Onions and onion powder ",
    "Peach pits ",
    "Potato leaves and stems (green parts) ",
    "Raisins ",
    "Rhubarb leaves ",
    "Salt ",
    "Tea (because it contains caffeine) ",
    "Tomato leaves and stems (green parts) ",
    "Walnuts ",
    "Xylitol (artificial sweetener that is toxic to pets)",
    "Yeast dough"];


const list_items = list.map((item) =>
        <ListItem> {item} </ListItem>
    );


class General extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div className="main-title">
                    <h1> In general, dogs should avoid consuming: </h1>
                </div>

                <div className="list">
                <List component="nav"> {list_items} </List>
                </div>

                <div className="section">
                     <h5> source url: <a href="http://www.humanesociety.org/animals/resources/tips/foods_poisonous_to_pets.html"> http://www.humanesociety.org/animals/resources/tips/foods_poisonous_to_pets.html </a> </h5>
                 </div>
            </div>
        );
    }
}

export default General;
