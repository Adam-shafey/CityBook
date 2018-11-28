import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import InputAdornment from '@material-ui/core/InputAdornment';
import CountrySelector from '../Questions/CountrySelector.js';
import PersonalQuestions from '../Questions/PersonalQuestions.js';
import ActivitySelector from '../Questions/ActivitySelector.js';
import KeyFactorsSelector from '../Questions/KeyFactorsSelector.js';
import QuestionsDoubled from '../Questions/QuestionsDoubled.js';


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import _ from "lodash";
import './CSS/staticLayout.css'
const ResponsiveReactGridLayout = WidthProvider(Responsive);


class StaticLayout extends React.Component {
    static defaultProps = {
        className: "layout",
        cols: { lg: 4, md: 4, sm: 2, xs: 1, xxs: 1 },
        rowHeight: 200,

    };



    constructor(props) {
        super(props);



        this.state = {

        };

        this.onLayoutChange = this.onLayoutChange.bind(this);
        this.onBreakpointChange = this.onBreakpointChange.bind(this);
    }

    // We're using the cols coming back from this to calculate where to add new items.
    onBreakpointChange(breakpoint, cols) {
        this.setState({
            breakpoint: breakpoint,
            cols: cols
        });
    }

    onLayoutChange(layout) {
        this.setState({ layout: layout });
    }
    render() {
    const divStyle = {
        position: 'absolute',
        display: 'table',
        textAlign: 'center'
    }

    const divStyle2={
        display: 'table-cell',
        verticalAlign: 'bottom'
    }

        return (
            <div>
                <ResponsiveReactGridLayout
                    className="StaticLayout"
                    onLayoutChange={this.onLayoutChange}
                    onBreakpointChange={this.onBreakpointChange}
                    rowHeight={200}
                    {...this.props}

                >
                    <div key="1" data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Question 1
                            </Typography>
                                <Typography variant="h6" component="h2">
                                    Tell us about yourself
                             </Typography>
                                <PersonalQuestions />
                            </CardContent>
                        </Card>
                    </div>
                    <div key="2" data-grid={{ x: 1, y: 0, w: 1, h: 2, static: true }}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Question 2
                            </Typography>
                                <Typography variant="h6" component="h2">
                                    How important is freedom of speech and racial tolerance?
                             </Typography>
                                <QuestionsDoubled Question1="Freedom Of Speech" Question2="Racial Tolerance" />
                            </CardContent>
                        </Card>
                    </div>
                    <div key="3" data-grid={{ x: 2, y: 0, w: 1, h: 2, static: true }}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Question 3
                            </Typography>
                                <Typography variant="h6" component="h2">
                                    How important is walkability and safety to you?
                             </Typography>
                                <QuestionsDoubled Question1="Walkability" Question2="Safety" />
                            </CardContent>
                        </Card>
                    </div>
                    <div key="4" data-grid={{ x: 3, y: 0, w: 1, h: 2, static: true }}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Question 4
                            </Typography>
                                <Typography variant="h6" component="h2">
                                    How important is Air Quality and traffic safety to you?
                             </Typography>
                                <QuestionsDoubled Question1="Air Quality" Question2="Traffic Safety" />
                            </CardContent>
                        </Card>
                    </div>
                    <div key="5" data-grid={{ x: 0, y: 2, w: 1, h: 2, static: true }}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Question 5
                            </Typography>
                                <Typography variant="h6" component="h2">
                                    Which cities have you been to that you liked?
                             </Typography>
                                <CountrySelector />
                            </CardContent>
                        </Card>
                    </div>
                    <div key="6" data-grid={{ x: 1, y: 2, w: 1, h: 2, static: true }}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Question 6
                            </Typography>
                                <Typography variant="h6" component="h2">
                                    Which cities have you been to that you did not like?
                             </Typography>
                                <CountrySelector />
                            </CardContent>
                        </Card>
                    </div>
                    <div key="7" data-grid={{ x: 2, y: 2, w: 1, h: 2, static: true }}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Question 7
                            </Typography>
                                <Typography variant="h6" component="h2">
                                    How important is Internet Speed and Night Life to you?
                             </Typography>
                                <QuestionsDoubled Question1="Internet Speed" Question2="Night Life" />
                            </CardContent>
                        </Card>
                    </div>
                    <div key="8" data-grid={{ x: 3, y: 2, w: 1, h: 2, static: true }}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Question 8
                            </Typography>
                                <Typography variant="h6" component="h2">
                                    How important is local and lgbt friendliness?
                             </Typography>
                                <QuestionsDoubled Question1="Local friendliness" Question2="Lgbt friendliness" />
                            </CardContent>
                        </Card>
                    </div>
                </ResponsiveReactGridLayout>
                <div style={divStyle}>
                <Button color="secondary" style={divStyle2}>
                    Submit
                </Button>
                </div>
            </div>
        );
    }
}

export default StaticLayout;
