import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import _ from "lodash";
import axios from 'axios';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const DefaultRecs = [
    {
        value: 'Cairo',
        label: '',
    },
    {
        value: 'Montreal',
        label: '1',
    },
    {
        value: 'Alexandria',
        label: '2',
    },
    {
        value: 'Beirut',
        label: '3',
    },
    {
        value: 'Dakar',
        label: '4',
    },
    {
        value: 'New_york',
        label: '5',
    },
    {
        value: 'Los_Angeles',
        label: '6',
    },
    {
        value: 'London',
        label: '7',
    },
];

class RecommendationLayout extends React.Component {
    static defaultProps = {
        className: "layout",
        cols: { lg: 4, md: 4, sm: 2, xs: 1, xxs: 1 },
        rowHeight: 200,

    };

    constructor(props) {
        super(props);



        this.state = {

            Recommendations: [
                {
                    value: 'Cairo',
                    label: '',
                },
                {
                    value: 'Montreal',
                    label: '1',
                },
                {
                    value: 'Alexandria',
                    label: '2',
                },
                {
                    value: 'Beirut',
                    label: '3',
                },
                {
                    value: 'Dakar',
                    label: '4',
                },
                {
                    value: 'New_york',
                    label: '5',
                },
                {
                    value: 'Los_Angeles',
                    label: '6',
                },
                {
                    value: 'London',
                    label: '7',
                },
            ]

        };

        this.onLayoutChange = this.onLayoutChange.bind(this);
        this.onBreakpointChange = this.onBreakpointChange.bind(this);
    }

    componentDidMount() {
        axios.get(`http://ec2-18-237-226-219.us-west-2.compute.amazonaws.com:3090/`)
          .then(res => {
            const Recommendations = res.data;
            this.setState({ Recommendations });
          })

        for (let index = 0; index < this.state.Recommendations.length; index++) {
            const Recommendations = this.state.Recommendations;

        }

        
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
                                Recommendation 1
                            </Typography>
                            <Typography variant="h6" component="h2">
                                Tell us about yourself
                             </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div key="2" data-grid={{ x: 1, y: 0, w: 1, h: 2, static: true }}>
                <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                            Recommendation 2
                            </Typography>
                            <Typography variant="h6" component="h2">
                                What's your ideal day activity?
                             </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div key="3" data-grid={{ x: 2, y: 0, w: 1, h: 2, static: true }}>
                <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                            Recommendation 3 
                            </Typography>
                            <Typography variant="h6" component="h2">
                                What's your favorite method of transportation?
                             </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div key="4" data-grid={{ x: 3, y: 0, w: 1, h: 2, static: true }}>
                <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                            Recommendation 4
                            </Typography>
                            <Typography variant="h6" component="h2">
                                Which of the following factors are important to you?
                             </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div key="5" data-grid={{ x: 0, y: 2, w: 1, h: 2, static: true }}>
                <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                            Recommendation 5
                            </Typography>
                            <Typography variant="h6" component="h2">
                                Which cities have you been to that you liked?
                             </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div key="6" data-grid={{ x: 1, y: 2, w: 1, h: 2, static: true }}>
                <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                            Recommendation 6
                            </Typography>
                            <Typography variant="h6" component="h2">
                            Which cities have you been to that you did not like?
                             </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div key="7" data-grid={{ x: 2, y: 2, w: 1, h: 2, static: true }}>
                <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                            Recommendation 7
                            </Typography>
                            <Typography variant="h6" component="h2">
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
                <div key="8" data-grid={{ x: 3, y: 2, w: 1, h: 2, static: true }}>
                <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                            Recommendation 8
                            </Typography>
                            <Typography variant="h6" component="h2">
                                What's your favorite city
                             </Typography>
                            <Typography color="textSecondary">
                                Paris
                            </Typography>
                            <Typography component="p">
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </ResponsiveReactGridLayout>
        );
    }
}

export default RecommendationLayout;
