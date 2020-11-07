import React from "react";
import "./style.css";
import { Container, Row, Col, Card, Button, Form, Badge } from "react-bootstrap";


function FriendPill(props) {
    return (
<a>
        <Badge pill variant="secondary">
        {/* {props.first} {props.last} */}
        Sally Sue
      </Badge>
      </a>
    );
}

export default FriendPill;