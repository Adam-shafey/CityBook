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
        marginTop: 70,
        height: 170,

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



class ActivitySelector extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            Choice: '',
        };
        this.Options = this.Options.bind(this);
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    Options() {
        const options = {
       "Activity": [
           "","Enjoy the beach", "Shopping", "Photography", "Physical adventures", "Food", "City touring"
   ],
       "Transportation": [
           "","Walk", "Public transit", "Rent a car/Uber"
   ]
        }
        if ((this.props.question)==="Activity") return options.Activity;
        else if ((this.props.question)==="Transportation") return options.Transportation;
   }
    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="standard-select-currency-native"
                    select
                    label="Choice"
                    className={classes.textField}
                    value={this.state.Choice}
                    onChange={this.handleChange('Choice')}
                    SelectProps={{
                        native: true,
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText=""
                    margin="normal"
                >
                    {this.Options().map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </TextField>
            </form>
        );
    }
}

ActivitySelector.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActivitySelector);