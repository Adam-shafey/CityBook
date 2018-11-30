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

const CityList = [
    "mexico-city-mexico",
    "cancun-mexico",
    "amman-jordan",
    "ho-chi-minh-city-vietnam",
    "hong-kong-china",
    "zhuhai-china",
    "phuket-thailand",
    "kuala-lumpur-malaysia",
    "phnom-penh-cambodia",
    "chennai-india",
    "jaipur-india",
    "agra-india",
    "delhi-india",
    "mumbai-india",
    "shenzhen-china",
    "washington-dc-united-states",
    "madison-wi-united-states",
    "boston-ma-united-states",
    "dubai-united-arab-emirates",
    "singapore-singapore",
    "glasgow-united-kingdom",
    "edinburgh-united-kingdom",
    "leuven-belgium",
    "berlin-germany",
    "brussels-belgium",
    "gdansk-poland",
    "quito-ecuador",
    "cuenca-ecuador",
    "guayaquil-ecuador",
    "pasto-colombia",
    "cali-colombia"
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
        };

        this.return = this.return.bind(this);
        this.onLayoutChange = this.onLayoutChange.bind(this);
        this.onBreakpointChange = this.onBreakpointChange.bind(this);
        this.Recommendationlist = [];
        this.PicList = [];

        for (let index = 0; index < 4; index++) {
            const val= CityList[(Math.floor(Math.random() * (CityList.length-0) + 0))];
            this.Recommendationlist.push(val)
        }   
    }

    componentDidMount() {
            for (let index = 0; index < 4; index++) {
                try {
                    const temp = this.Recommendationlist[i].split("-");
                    console.log(this.Recommendationlist[i]);
                    const tempLink = `https://en.wikipedia.org/api/rest_v1/page/media/${temp[0]}?redirect=false`
                    axios.get(tempLink).then(res => {
                        console.log(res);
                      const pic = res.data.items[0].thumbnail.source;
                      this.PicList.push(pic);
                      console.log(this.PicList);
                    })}
                catch (error) {
                
            }

        }
        console.log(this.state)
    }


    return(){
        this.props.returnCallback();
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

        const Recommendationlist = this.Recommendationlist
        console.log(Recommendationlist)
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
                                {Recommendationlist[0]}
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
                            {Recommendationlist[1]}
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
                            {Recommendationlist[2]}
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
                            {Recommendationlist[3]}
                             </Typography>
                        </CardContent>
                    </Card>
                </div>
                <Button color="primary" onClick={this.return}>
                    Return
                </Button>
            </ResponsiveReactGridLayout>
        );
    }
}

export default RecommendationLayout;
