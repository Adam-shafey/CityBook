import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import _ from "lodash";
const ResponsiveReactGridLayout = WidthProvider(Responsive);


class StaticLayout extends React.Component {
    static defaultProps = {
        className: "layout",
        cols: { lg: 4, md: 4, sm: 2, xs: 1, xxs: 1 },
        rowHeight: 200
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
        return (
            <ResponsiveReactGridLayout
                className="layout"
                onLayoutChange={this.onLayoutChange}
                rowHeight={200}
                {...this.props}

            >
                <div key="1" data-grid={{ x: 0, y: 0, w: 1, h: 1, static: true }}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Question
                            </Typography>
                            <Typography variant="h5" component="h2">
                                What's your favorite city
                             </Typography>
                            <Typography color="textSecondary">
                                Paris
                            </Typography>
                            <Typography component="p">
                            <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div key="2" data-grid={{ x: 1, y: 0, w: 1, h: 1, static: true }}>
                <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Question
                            </Typography>
                            <Typography variant="h5" component="h2">
                                What's your favorite city
                             </Typography>
                            <Typography color="textSecondary">
                                Paris
                            </Typography>
                            <Typography component="p">
                            <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div key="3" data-grid={{ x: 2, y: 0, w: 1, h: 1, static: true }}>
                <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Question
                            </Typography>
                            <Typography variant="h5" component="h2">
                                What's your favorite city
                             </Typography>
                            <Typography color="textSecondary">
                                Paris
                            </Typography>
                            <Typography component="p">
                            <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div key="4" data-grid={{ x: 3, y: 0, w: 1, h: 1, static: true }}>
                <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Question
                            </Typography>
                            <Typography variant="h5" component="h2">
                                What's your favorite city
                             </Typography>
                            <Typography color="textSecondary">
                                Paris
                            </Typography>
                            <Typography component="p">
                            <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div key="5" data-grid={{ x: 0, y: 1, w: 1, h: 1, static: true }}>
                <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Question
                            </Typography>
                            <Typography variant="h5" component="h2">
                                What's your favorite city
                             </Typography>
                            <Typography color="textSecondary">
                                Paris
                            </Typography>
                            <Typography component="p">
                            <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div key="6" data-grid={{ x: 1, y: 1, w: 1, h: 1, static: true }}>
                <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Question
                            </Typography>
                            <Typography variant="h5" component="h2">
                                What's your favorite city
                             </Typography>
                            <Typography color="textSecondary">
                                Paris
                            </Typography>
                            <Typography component="p">
                            <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div key="7" data-grid={{ x: 2, y: 1, w: 1, h: 1, static: true }}>
                <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Question
                            </Typography>
                            <Typography variant="h5" component="h2">
                                What's your favorite city
                             </Typography>
                            <Typography color="textSecondary">
                                Paris
                            </Typography>
                            <Typography component="p">
                            <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div key="8" data-grid={{ x: 3, y: 1, w: 1, h: 1, static: true }}>
                <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Question
                            </Typography>
                            <Typography variant="h5" component="h2">
                                What's your favorite city
                             </Typography>
                            <Typography color="textSecondary">
                                Paris
                            </Typography>
                            <Typography component="p">
                            <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </ResponsiveReactGridLayout>
        );
    }
}

export default StaticLayout;
