import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';

class ShoppingList extends Component {

  componentDidMount() {
    this.props.getItems();
  }

  handleDeleteItem = id => {
    this.props.deleteItem(id);
  }

  render() {
    const { items } = this.props.item;
    const listDiv = items.map(({ id, name }) => (
      <CSSTransition key={id} classNames="fade" timeout={500}>
        <ListGroupItem>
          <Button
            className="remove-btn"
            color="danger"
            size="sm"
            onClick={() => this.handleDeleteItem(id)}
          >
            &times;
          </Button>
          {name}
        </ListGroupItem>
      </CSSTransition>
    ));

    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {listDiv}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func,
  item: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);