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
        marginTop: -30,
        height: 270,

    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 240,
    },
    dense: {
        marginTop: 10,
    },
    menu: {
        width: 240,
    },
});

const ratingsRange = [
    {
        value: '0',
        label: '',
    },
    {
        value: '1',
        label: '1',
    },
    {
        value: '2',
        label: '2',
    },
    {
        value: '3',
        label: '3',
    },
    {
        value: '4',
        label: '4',
    },
    {
        value: '5',
        label: '5',
    },
    {
        value: '6',
        label: '6',
    },
    {
        value: '7',
        label: '7',
    },
    {
        value: '8',
        label: '8',
    },
    {
        value: '9',
        label: '9',
    },
    {
        value: '10',
        label: '10',
    },
];

class KeyFactorsSelector extends React.Component {
    state = {
        IntSpeed:'', 
        Nightlife:'', 
        Safety:'', 
        LocalFriendlines:''
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
                    id="standard-select-currency-native"
                    select
                    label="Internet Speed"
                    className={classes.textField}
                    value={this.state.IntSpeed}
                    onChange={this.handleChange('IntSpeed')}
                    SelectProps={{
                        native: true,
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText=""
                    margin="normal"
                >
                    {ratingsRange.map(option => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                    ))}
                </TextField>
                <TextField
                    id="standard-select-currency-native"
                    select
                    label="Nightlife"
                    className={classes.textField}
                    value={this.state.Nightlife}
                    onChange={this.handleChange('Nightlife')}
                    SelectProps={{
                        native: true,
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText=""
                    margin="normal"
                >
                    {ratingsRange.map(option => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                    ))}
                </TextField>
                <TextField
                    id="standard-select-currency-native"
                    select
                    label="Safety"
                    className={classes.textField}
                    value={this.state.Safety}
                    onChange={this.handleChange('Safety')}
                    SelectProps={{
                        native: true,
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText=""
                    margin="normal"
                >
                    {ratingsRange.map(option => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                    ))}
                </TextField>
                <TextField
                    id="standard-select-currency-native"
                    select
                    label="Local Friendliness"
                    className={classes.textField}
                    value={this.state.LocalFriendliness}
                    onChange={this.handleChange('LocalFriendliness')}
                    SelectProps={{
                        native: true,
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText=""
                    margin="normal"
                >
                    {ratingsRange.map(option => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                    ))}
                </TextField>
            </form>
        );
    }
}

KeyFactorsSelector.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KeyFactorsSelector);