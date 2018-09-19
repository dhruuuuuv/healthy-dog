import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './App.css'
import WeightSelector from './WeightSelector.js'
import ChocolateSelector from './ChocolateSelector.js'
import Toxicity from './Toxicity.js'
import Grid from '@material-ui/core/Grid';


function weightConverterp2kg(valNum) {
      let x = valNum*0.453592;
      return Math.round( x * 10 ) / 10
}

function weightConverterkg2p(valNum) {
          let x = valNum*2.20462;
          return Math.round( x * 10 ) / 10
}

function weightConverteroz2g(valNum) {
      let x = valNum*28.3495;
      return Math.round( x * 10 ) / 10
}

function weightConverterg2oz(valNum) {
      let x = valNum*0.035274;
      return Math.round( x * 10 ) / 10
}

class Chocolate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dog_weight: 0,
            choc_weight: 0,
            weight_unit: "metric",
            choc_type: 0,
            toxicity: 0
        }


        this.handleDogWeightChange = this.handleDogWeightChange.bind(this);
        this.handleChocWeightChange = this.handleChocWeightChange.bind(this);
        this.handleWeightUnitChange = this.handleWeightUnitChange.bind(this);
        this.handleChocChange = this.handleChocChange.bind(this);
        this.calculateToxicity = this.calculateToxicity.bind(this);
    }

    calculateToxicity() {
        var dogWeight;
        var chocType;
        var ozChocolate;
        var tox;

        if (this.state.weight_unit === "imperial") {
            dogWeight = this.state.dog_weight;
            chocType = this.state.choc_type;
            ozChocolate = this.state.choc_weight;
            tox = ((ozChocolate * chocType)/ dogWeight);
            tox = Math.round(tox * 100) / 100;
            this.setState({toxicity: tox});

        } else {
            dogWeight = weightConverterkg2p(this.state.dog_weight);
            chocType = this.state.choc_type;
            ozChocolate = weightConverterg2oz(this.state.choc_weight);
            tox = ((ozChocolate * chocType)/ dogWeight);
            tox = Math.round(tox * 100) / 100;
            this.setState({toxicity: tox});

        }
    }


    handleDogWeightChange(event) {
        this.setState({dog_weight: event.target.value}, this.calculateToxicity);
    }

    handleChocWeightChange(event) {
        this.setState({choc_weight: event.target.value}, this.calculateToxicity);
    }

    handleWeightUnitChange(event) {
        this.setState({weight_unit: event.target.value});
        if (event.target.value === "metric") {
            let new_dog_weight = weightConverterp2kg(this.state.dog_weight);
            let new_choc_weight = weightConverteroz2g(this.state.choc_weight);
            this.setState({dog_weight: new_dog_weight, choc_weight: new_choc_weight});
        }
        else if (event.target.value === "imperial") {
            let new_dog_weight = weightConverterkg2p(this.state.dog_weight);
            let new_choc_weight = weightConverterg2oz(this.state.choc_weight);
            this.setState({dog_weight: new_dog_weight, choc_weight: new_choc_weight});
        }
    }

    handleChocChange(event) {
        console.log(event.target.value);
        this.setState({choc_type: event.target.value}, this.calculateToxicity);
    }


    render() {
        return (
          <div className="App">
              <div className="main-title">
                  <h1>Has my dog eaten a toxic amount of chocolate?</h1>
              </div>
              <WeightSelector
                  unit={this.state.weight_unit}
                  onWeightChange={this.handleWeightUnitChange}
              />
              <div className="section">
                  <Grid container spacing={24}>
                      <Grid item xs>
                          <h2> Enter weight of your dog: </h2>
                      <TextField
                          id="weight-dog"
                          label={this.state.weight_unit === "metric" ? "kg" : "lb"}
                          value={this.state.dog_weight}
                          onChange={this.handleDogWeightChange}
                          type="number"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          margin="normal"
                          variant="outlined"
                      />
                      </Grid>

                      <Grid item xs>
                          <h2>Enter weight of chocolate:</h2>
                              <TextField
                                  id="weight-choc"
                                  label={this.state.weight_unit === "metric" ? "g" : "oz"}
                                  value={this.state.choc_weight}
                                  onChange={this.handleChocWeightChange}
                                  type="number"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  margin="normal"
                                  variant="outlined"
                              />
                      </Grid>

                      <Grid item xs>
                          <h2> Select Type of Chocolate</h2>
                          <ChocolateSelector
                              chocType={this.state.choc_type}
                              handleChocChange={this.handleChocChange}/>
                      </Grid>
                  </Grid>
              </div>

              <div className="info">
                  The above calculates how much of the ingredient toxic to dogs is consumed.
                      If your dog has consumed an amount of toxic ingredient close to <b>20mg</b> per pound of dog, you should call a vet.
              </div>
              <div className="section">
                  <Grid item xs>
                      <Toxicity toxicity={this.state.toxicity}/>
                  </Grid>
              </div>
              <div className="section">
                   <h5> source url: <a href="https://www.petful.com/pet-health/how-much-chocolate-toxic-dogs/"> https://www.petful.com/pet-health/how-much-chocolate-toxic-dogs/ </a> </h5>
               </div>
          </div>
        );
    }
}

export default Chocolate;
