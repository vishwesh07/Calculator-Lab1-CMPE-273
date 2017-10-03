import React, {Component} from 'react';
import CalcScreen from "./component/calcScreen";

class App extends Component {

    render() {

        var margin = {margin: '10%'};

        return (

            <div className="container-fluid">
                <div className="row">
                    <div
                        className="col-sm-offset-4 col-md-offset-4 col-lg-offset-4 col-sm-4 col-md-4 col-lg-4"
                        style={margin} >
                        <div className="panel panel-primary">
                            <div className="panel-heading"></div>
                            <div className="panel-body">
                                <CalcScreen/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;
