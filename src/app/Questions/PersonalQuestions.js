import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 10,
        height: 260,

    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

const Genders = [
    {
        value: 'M',
        label: 'M',
    },
    {
        value: 'F',
        label: 'F',
    },
];

class PersonalQuestions extends React.Component {
    state = {
        age: '',
        multiline: 'Controlled',
        Gender: '',
        budget: 0,
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
            <TextField
          id="standard-number"
          label="Age"
          value={this.state.age}
          onChange={this.handleChange('age')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
                <TextField
                    id="standard-select-currency-native"
                    select
                    label="Gender"
                    className={classes.textField}
                    value={this.state.currency}
                    onChange={this.handleChange('Gender')}
                    SelectProps={{
                        native: true,
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="Please select your Gender"
                    margin="normal"
                >
                    {Genders.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
                <TextField
          id="budget"
          label="Max Monthly Budget"
          value={this.state.budget}
          onChange={this.handleChange('budget')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
            </form>
        );
    }
}

PersonalQuestions.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonalQuestions);