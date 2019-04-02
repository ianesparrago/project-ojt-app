import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { Item } from "src/components/blocks";
import { Button } from "src/components/elements";
import { FormGroup, TextAreaInput, TextInput } from "src/components/compounds";

import {
  editTask,
  clearErrors
} from "src/services/session/actions/taskActionCreators";

export class TaskEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: props.task.data.content,
      ticketNumber: props.task.data.ticketNumber || ""
    };
  }

  componentDidMount() {
    clearErrors();
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const {
      editTask,
      task: { data },
      handleToggleEdit
    } = this.props;
    const { ...state } = this.state;

    editTask(data._id, state).then(() => {
      handleToggleEdit();
    });
  };

  render() {
    const {
      task: { errors, isLoading }
    } = this.props;
    const { ...state } = this.state;

    return (
      <Fragment>
        <Item margin="stack-base">
          <FormGroup>
            <FormGroup.Label title="Content" htmlFor="content-input" />
            <FormGroup.Input>
              <TextAreaInput
                autoFocus
                id="content-input"
                value={state.content}
                name="content"
                cols="30"
                rows="10"
                error={errors.content}
                disabled={isLoading}
                onChange={this.handleInputChange}
              />
            </FormGroup.Input>
          </FormGroup>
        </Item>

        <Item margin="stack-base">
          <FormGroup>
            <FormGroup.Label
              title="Ticket Number (Optional)"
              htmlFor="ticket-number-input"
            />

            <FormGroup.Input>
              <TextInput
                name="ticketNumber"
                id="ticket-number-input"
                type="text"
                value={state.ticketNumber}
                onChange={this.handleInputChange}
                error={errors.ticketNumber}
                disabled={isLoading}
              />
            </FormGroup.Input>
          </FormGroup>
        </Item>

        <Item>
          <FormGroup>
            <FormGroup.Label />
            <FormGroup.Input>
              <Button
                type="submit"
                variant="primary"
                onClick={this.handleSubmit}
                disabled={isLoading}
              >
                Submit
              </Button>
            </FormGroup.Input>
          </FormGroup>
        </Item>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    task: state.task
  }),
  {
    editTask: editTask
  }
)(TaskEdit);
