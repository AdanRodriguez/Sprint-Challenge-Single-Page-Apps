import React from "react";
import {Card} from 'semantic-ui-react';


export default function EpisodeCard(props) {
  console.log(props);
  return (
    <Card>
      <Card.Content>
        <h1>Name: {props.name}</h1>
        <p>Episode: {props.episode}</p>
        <p>Air Date: {props.date}</p>
      </Card.Content>
    </Card>
  );
};