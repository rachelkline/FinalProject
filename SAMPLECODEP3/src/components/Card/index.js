import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card mb-2 shadow">
            <div className="card-body">
                <div className="row inline-block">
                    <div className="col-sm-1">
                        <img className="float-left rounded-circle" alt="profile picture" src={props.image}></img>
                    </div>
                    <span className="text-left col-sm-2 mt-4 ml-3">
                    <strong>{props.first} {props.last}</strong>
                    </span>
                    <span className="text-left col-sm-2 mt-4">
                    Age: {props.age}
                        
                    </span>
                    <span className="text-left col-sm-2 mt-4">
                        {props.phone}
                    </span>
                    <span className="text-left col-sm-4 mt-4">
                    {props.email}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Card;