import * as React from 'react';
import { OverlayTrigger, Col, Card, Button, Overlay } from "react-bootstrap";
import { Tooltip } from '@devexpress/dx-react-chart-bootstrap4';

import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-bootstrap4';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import { Animation } from '@devexpress/dx-react-chart';
import { EventTracker, HoverState, SelectionState } from '@devexpress/dx-react-chart';

const data = [
    { name: 'Sally', value: '1', budget: 200 },
    { name: 'Bill', value: '2', budget: 300 },
    { name: 'Frank', value: '3', budget: 400 },
    { name: 'Greg', value: '4', budget: 150 },
  ];
  const compare = (
    { series, point }, { series: targetSeries, point: targetPoint },
  ) => series === targetSeries && point === targetPoint;

  

export default class Graph extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
      hover: undefined,
      selection: [],
    };

    
    this.changeHover = hover => this.setState({ hover });
    this.click = ({ targets }) => {
      const target = targets[0];
      if (target) {
        this.setState(({ selection }) => ({
          selection: selection[0] && compare(selection[0], target) ? [] : [target],
        }));
      }
    };
  }
  

  render() {
    const { data: chartData, hover, selection } = this.state;

    
  
    return (
      <div>
      <Card.Subtitle className="mb-2 text-muted">
      
      {' '}
      {selection.length ? data[selection[0].point].name+"'s total expenses: $"+ data[selection[0].point].budget : undefined}
    </Card.Subtitle>
    <Card.Subtitle className="mb-2 text-muted">
      {' '}
      {selection.length ? "To split them evenly, each other member would pay $"+ Math.round(data[selection[0].point].budget/(data.length - 1)) : undefined}
    </Card.Subtitle>
      <div className="card">
 
        <Chart 
        className="tessst"
          data={chartData}
        >
          
          <ArgumentAxis />

          <ValueAxis max={20} />
          
          
          <BarSeries
          
            valueField= 'budget'
            argumentField="name"
          />


         <EventTracker onClick={this.click}/>

         <SelectionState selection={selection}/>
       

          <HoverState hover={hover} onHoverChange={this.changeHover} />
 
          <Animation />
          
        </Chart>
      </div>
      </div>
    );
  }
}