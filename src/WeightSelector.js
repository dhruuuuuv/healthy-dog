import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import './App.css'


class WeightSelector extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Weight Unit</FormLabel>
                  <RadioGroup
                    aria-label="Weight Unit"
                    name="weight-unit"
                    value={this.props.unit}
                    row={true}
                    onChange={this.props.onWeightChange}
                  >
                    <FormControlLabel value="metric" control={<Radio />} label="Metric"/>
                    <FormControlLabel value="imperial" control={<Radio />} label="Imperial" />
                  </RadioGroup>
                </FormControl>
            </div>
        );
    }
}

export default WeightSelector;
