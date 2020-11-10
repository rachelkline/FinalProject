import React from "react";
import "./style.css";
import Card from '../Card';
// import API from "../../utils/API";
// import API from "../utils/API";


class SortedCards extends React.Component {

    state = {
        sortedEmployees: [],
        employees: []

    }
    componentDidMount() {
        if (this.state.sortedEmployees.length < 1) {
            this.setState({
                sortedEmployees: this.props.empList
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.empList !== prevProps.empList) {
            this.setState({
                sortedEmployees: this.props.empList
            })
        }
    }


    render() {
        return (

            <div>
                <div className="row ml-3">
                    <div className="col-sm-1">

                    </div>
                    
                    <div className="col-sm-2 text-left">
                    <small><span className="desc">Name</span></small>
                    </div>
                    <div className="col-sm-2 text-left">
                    <small><span className="desc">Age</span></small>
                    </div>
                    <div className="col-sm-2 text-left">
                    <small><span className="desc">Phone</span></small>
                    </div>
                    <div className="col-sm-4 text-left">
                    <small><span className="desc">E-mail</span></small>
                    </div>
                   
                </div>
                <br/>

                {this.state.sortedEmployees.map((item, index) => (

                    <Card
                        image={item.picture.medium}
                        first={item.name.first}
                        last={item.name.last}
                        age={item.dob.age}
                        phone={item.cell}
                        email={item.email}
                    />
                ))}
            </div>
        );
    }
}

export default SortedCards;