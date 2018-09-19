import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import './App.css'


class ChocolateSelector extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <FormControl>
                    <InputLabel>Chocolate Type</InputLabel>
                          <NativeSelect
                            value={this.props.choc_type}
                            onChange={this.props.handleChocChange}
                            name="choc-type"
                          >
                            <option value={0}></option>
                            <option value={0.25}>White Chocolate (0.25 mg/oz)</option>
                            <option value={58}>Milk Chocolate (58 mg/oz)</option>
                            <option value={130}>Dark Chocolate (130 mg/oz)</option>
                            <option value={393}>Baker's Chocolate (393 mg/oz)</option>
                          </NativeSelect>
                          <FormHelperText>Select type of Chocolate</FormHelperText>
                </FormControl>
            </div>
        );
    }
}

export default ChocolateSelector;
