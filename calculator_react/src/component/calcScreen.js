import React, {Component} from 'react';
import * as API from '../api/API';

class CalcScreen extends Component {

    state = {
        numbers: {n1:0, n2:0},
        result: 0,
        operation: '',
        message: ''
    };

    handleSubmit = () => {
        console.log(this.state.operation+" "+this.state.numbers.n1+" "+this.state.numbers.n2);
        API.calculate(this.state)
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
                                    value={this.state.numbers.n1}
                                    onChange={(event) => {
                                        this.setState({
                                            numbers: {
                                                ...this.state.numbers,
                                                n1: event.target.value
                                            }
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
                                    value={this.state.numbers.n2}
                                    onChange={(event) => {
                                        this.setState({
                                            numbers: {
                                                ...this.state.numbers,
                                                n2: event.target.value
                                            }
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