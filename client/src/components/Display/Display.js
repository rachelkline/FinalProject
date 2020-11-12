import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import SideBar from "../sidebar/SideBar";
import Content from "../content/Content";
import Main from "../Main/Main";
import { Row, Col } from "react-bootstrap";

class Display extends React.Component {
  constructor(props) {
    super(props);

    // Moblie first
    this.state = {
      isOpen: false,
      isMobile: true
    };

    this.previousWidth = -1;
  }

  updateWidth() {
    const width = window.innerWidth;
    const widthLimit = 576;
    const isMobile = width <= widthLimit;
    const wasMobile = this.previousWidth <= widthLimit;

    if (isMobile !== wasMobile) {
      this.setState({
        isOpen: !isMobile
      });
    }

    this.previousWidth = width;
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth.bind(this));
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="App wrapper">
        <Content toggle={this.toggle} isOpen={this.state.isOpen} />
        <Row>
          
        <SideBar trips={this.props.trips} toggle={this.toggle} isOpen={this.state.isOpen} />

        
        <Col>
       <Main trip={this.props.trip}/>
       </Col>

       </Row>
      </div>
    );
  }
}

export default Display;