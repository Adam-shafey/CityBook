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

class QuestionsDoubled extends React.Component {
    constructor(props) {
        super(props);


    this.state = {
        Answer1:'', 
        Answer2:'', 
        Question1:this.props.Question1, 
        Question2:this.props.Question2
    };
    }

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
                    label={this.props.Question1}
                    className={classes.textField}
                    value={this.state.Answer1}
                    onChange={this.handleChange('Answer1')}
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
                    label={this.props.Question2}
                    className={classes.textField}
                    value={this.state.Answer2}
                    onChange={this.handleChange('Answer2')}
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

QuestionsDoubled.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuestionsDoubled);