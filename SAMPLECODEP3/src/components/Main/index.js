import React from "react";
import "./style.css";
import SortedCards from '../SortedCards';

class Main extends React.Component {

    state = {
        currentSearch: "",
        filteredEmployees: []
    };

    componentDidMount() { 
            this.setState({filteredEmployees: this.props.employees}); 
    }


    handleInputChange = event => {
        this.setState({
            currentSearch: event.target.value
        });
        let currentInput = event.target.value;
        const filteredList = this.props.employees.filter((item) => {
            let values = item.name.first + item.name.last + item.dob.age + item.email + item.cell;
            return values.indexOf(currentInput) !== -1;

        });

        this.setState({
            filteredEmployees: filteredList

        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="col-sm-4">
                <form className="form">
                <input type="text" 
                className="form-control form-control-lg shadow" 
                value={this.state.currentSearch} 
                name="currentSearch" 
                onChange={event => this.handleInputChange(event)} 
                placeholder="Filter Employees"/>

              
                </form>
                </div>
                </div>
                <br/>
                <br/>
                    <SortedCards empList={this.state.filteredEmployees} />
                
            </div>

        );
    }
}


export default Main;