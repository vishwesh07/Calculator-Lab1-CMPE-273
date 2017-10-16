import React, {Component} from 'react';
import * as API_Addition from '../api/API_Addition';
import * as API_Subtraction from '../api/API_Subtraction';
import * as API_Multiplication from '../api/API_Multiplication';
import * as API_Division from '../api/API_Division';

class CalcScreen extends Component {

    state = {
        n1:0,
        n2:0,
        result: 0,
        operation: '',
        message: ''
    };

    handleSubmit = () => {
        console.log(this.state.operation+" "+this.state.n1+" "+this.state.n2);
        switch(this.state.operation){
            case "Addition":
                API_Addition.calculate(this.state)
                    .then ( result =>  {
                        const r = result.result;
                        const message = result.message;
                        console.log(r);
                        this.setState({
                            ...this.state,
                            result: r,
                            message: message
                        });
                    });
                break;
            case "Subtraction":
                API_Subtraction.calculate(this.state)
                    .then ( result =>  {
                        const r = result.result;
                        const message = result.message;
                        console.log(r);
                        this.setState({
                            ...this.state,
                            result: r,
                            message: message
                        });
                    });
                break;
            case "Multiplication":
                API_Multiplication.calculate(this.state)
                    .then ( result =>  {
                        const r = result.result;
                        const message = result.message;
                        console.log(r);
                        this.setState({
                            ...this.state,
                            result: r,
                            message: message
                        });
                    });
                break;
            case "Division":
                API_Division.calculate(this.state)
                    .then ( result =>  {
                        const r = result.result;
                        const message = result.message;
                        console.log(r);
                        if(result.status === 200){
                            this.setState({
                                ...this.state,
                                result: r,
                                message: message
                            });
                        }
                        else if (result.status === 402){
                            this.setState({
                                ...this.state,
                                message: message
                            });
                        }
                    });
                break;
        }

    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <h1>Calculator</h1>
                            </div>
                            <div className="form-group">

                                Enter First Number :
                                <input
                                    type="number"
                                    className="form-control"
                                    name="inputNumber"
                                    id="number1"
                                    placeholder="First number"
                                    value={this.state.n1}
                                    onChange={(event) => {
                                        this.setState({
                                            ...this.state,
                                            n1: event.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group">

                                Enter Second Number :
                                <input
                                    type="number"
                                    className="form-control"
                                    name="inputNumber"
                                    id="number2"
                                    placeholder="Second number"
                                    value={this.state.n2}
                                    onChange={(event) => {
                                        this.setState({
                                            ...this.state,
                                            n2: event.target.value
                                        });
                                    }}
                                />
                            </div> <br/>

                            Available Operations : <br/> <br/>

                            <div className="form-group">
                                <input
                                    className="btn btn-primary"
                                    type="button"
                                    id="Addition"
                                    value= "Addition"
                                    onClick={() =>
                                        this.setState({
                                            ...this.state,
                                            operation: "Addition"
                                        },
                                        function(){this.handleSubmit()})
                                    }/>
                            </div>

                            <div className="form-group">
                                <input
                                    className="btn btn-primary"
                                    type="button"
                                    id = "Subtraction"
                                    value= "Subtraction"
                                    onClick={() =>
                                        this.setState({
                                                ...this.state,
                                                operation: "Subtraction"
                                            },
                                            function(){this.handleSubmit()})
                                    }/>
                            </div>

                            <div className="form-group">
                                <input
                                    className="btn btn-primary"
                                    type="button"
                                    id = "Multiplication"
                                    value = "Multiplication"
                                    onClick={() =>
                                        this.setState({
                                                ...this.state,
                                                operation: "Multiplication"
                                            },
                                            function(){this.handleSubmit()})
                                    }/>
                            </div>

                            <div className="form-group">
                                <input
                                    className="btn btn-primary"
                                    type="button"
                                    id = "Division"
                                    value= "Division"
                                    onClick={() =>
                                        this.setState({
                                                ...this.state,
                                                operation: "Division"
                                            },
                                            function(){this.handleSubmit()})
                                    }/>
                            </div>



                        </form>
                        <div className="col-md-12">
                            {this.state.message && (
                                <div  className="alert alert-warning" role="alert">
                                    <b>Result :</b>
                                    <br/>
                                    {this.state.message}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default CalcScreen;