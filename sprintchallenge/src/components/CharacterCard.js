import React from "react";
import {Card, Image} from 'semantic-ui-react';
import styled from 'styled-components';


const Title = styled.h1`
color: green`

export default function CharacterCard(props) {
  console.log(props);
  return (
    <Card id="card">
      <Image src={props.image}/>
      <Card.Content>
        <Title>Name: {props.name}</Title>
        <p>Species: {props.species}</p>
        <p>Status: {props.status}</p>
        <p>Origin: {props.origin}</p>
      </Card.Content>
    </Card>
  );
};