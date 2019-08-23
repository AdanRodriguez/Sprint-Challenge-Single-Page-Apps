import React from "react";
import {Card} from 'semantic-ui-react';


export default function LocationCard(props) {
  // console.log(props);
  return (
    <Card>
      <Card.Content>
        <h1>Planet: {props.name}</h1>
        <p>Type: {props.type}</p>
        <p>Dimension: {props.dimension}</p>
      </Card.Content>
    </Card>
  );
};