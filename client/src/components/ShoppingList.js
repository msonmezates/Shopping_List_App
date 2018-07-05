import React, { Component } from 'react';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

export default class ShoppingList extends Component {
  state = {
    items: [
      { id: uuid(), name: 'Bread' },
      { id: uuid(), name: 'Milk' },
      { id: uuid(), name: 'Eggs' },
      { id: uuid(), name: 'Juice' }
    ]
  };
  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button
         color="dark"
         style={{marginBottom: '2rem'}}
         onClick={() => {
           const name = prompt('Enter item');
           if(name) {
             this.setState(prevState => ({
               items: [...prevState.items, { id: uuid(), name }]
             }));
           }
         }}
        >Add Item</Button>
      </Container>
    );
  }
}