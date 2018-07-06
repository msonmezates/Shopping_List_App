import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
  state = {
    modal: false,
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name
    }
    // call action here
    this.props.addItem(newItem);
    // close the modal
    this.toggle()
  }

  onChange = e => {
    this.setState({ 
      [e.target.name]: e.target.value
     })
  }

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >Add Item</Button>
        
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >Add To Shopping List
          <ModalHeader
            toggle={this.toggle}
          ></ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add an item"
                  onChange={this.onChange}
                >
                </Input>
                <Button
                  color="dark"
                  style={{ marginTop: '2rem' }}
                  block
                >Add Item</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal);
