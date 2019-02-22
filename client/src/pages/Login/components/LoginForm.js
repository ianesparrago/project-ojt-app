import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Button } from "../../../components/elements";
import { TextInputSpecial } from "../../../components/compounds";
import { Item, Container } from "../../../layout";
import { loginUser } from "src/services/session/actions/authActionCreators";
import { connect } from "react-redux";

const StyledLoginForm = styled.div`
  width: 100%;
  height: 100%;

  .item-button {
  }
`;

export class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    this.props.loginUser(this.state);
  };

  render() {
    const { username, password } = this.state;

    return (
      <StyledLoginForm>
        <Item margin="stack-m">
          <TextInputSpecial
            value={username}
            name="username"
            placeholder="Username"
            onChange={this.handleInputChange}
            autoComplete="off"
          />
        </Item>

        <Item margin="stack-base">
          <TextInputSpecial
            value={password}
            name="password"
            placeholder="Password"
            type="password"
            onChange={this.handleInputChange}
            autoComplete="off"
          />
        </Item>

        <Item NAME="button">
          <Button full variant="primary" onClick={this.handleSubmit}>
            Log In
          </Button>
        </Item>
      </StyledLoginForm>
    );
  }
}

export default connect(
  null,
  { loginUser: loginUser }
)(LoginForm);
