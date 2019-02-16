import React, { Component } from "react";
import styled, { css } from "styled-components";

const configs = css`
  /* >>> rounded */
  ${p =>
    p.rounded &&
    css`
      border-radius: 1000em;
    `}

  /* >>> icon */
  ${p =>
    p.icon &&
    css`
      font-size: ${p => p.theme.font.scale.body};
      padding: 0;
    `}

  /* >>> full */
  ${p =>
    p.full &&
    css`
      width: 100%;
    `}

  
`;

const StyledButton = styled.button`
  /* border: 1px solid magenta; */
  min-width: var(--size-button);
  min-height: var(--size-button);
  user-select: none;
  box-shadow: ${p => p.theme.shadow[0]};
  transition-property: box-shadow, background-color;
  transition-duration: 100ms;
  font-size: ${p => p.theme.font.scale.base};
  padding: ${p => p.theme.size.s} ${p => p.theme.size.m};
  display: flex;
  align-items: center;
  justify-content: center;

  ${configs};

  /* 
  &:hover {
    box-shadow: ${p => p.theme.shadow[1]};
  }

  &:focus {
    box-shadow: 0 0 0 var(--size-xs) ${p => p.theme.color.primary.light};
  }

  &:active {
    box-shadow: 0 0 0 var(--size-xxs) ${p => p.theme.color.primary.light};
  }
  */

  &:disabled {
    background-color: ${p => p.theme.color.grey.medium};
    box-shadow: unset;
  } 
`;

// >>> Primary
const StyledButtonPrimary = styled(StyledButton)`
  background-color: ${p => p.theme.color.primary.main};
  color: ${p => p.theme.color.lightFixed};
  /* border-radius: 1000em; */
  text-transform: uppercase;
  font-weight: 700;

  &:hover {
    box-shadow: ${p => p.theme.shadow[1]};
  }

  &:focus {
    box-shadow: 0 0 0 var(--size-xs) ${p => p.theme.color.primary.light};
  }

  &:active {
    background-color: ${p => p.theme.color.primary.dark};
    box-shadow: 0 0 0 var(--size-xxs) ${p => p.theme.color.primary.light};
  }
`;

// >>> Secondary
const StyledButtonSecondary = styled(StyledButton)`
  background-color: ${p => p.theme.color.white};
  box-shadow: unset;
  color: ${p => p.theme.color.primary.main};
  text-transform: uppercase;
  font-weight: 700;

  &:hover {
    outline: var(--size-xxs) solid ${p => p.theme.color.primary.light};
  }

  &:focus {
    box-shadow: 0 0 0 var(--size-xs) ${p => p.theme.color.primary.light};
  }

  &:active {
    /* color: ${p => p.theme.color.primary.dark}; */
    background-color: ${p => p.theme.color.primary.light};
    box-shadow: 0 0 0 var(--size-xxs) ${p => p.theme.color.primary.light};
  }
`;

// >>> Text
const StyledButtonText = styled(StyledButton)`
  box-shadow: 0 0 0 0 transparent;
  background-color: unset;

  &:hover {
    box-shadow: 0 0 0 0 transparent;
    color: ${p => p.theme.color.primary.main};
  }

  &:focus {
    box-shadow: 0 0 0 var(--size-xs) ${p => p.theme.color.primary.light};
  }

  &:active {
    color: ${p => p.theme.color.primary.dark};
    box-shadow: 0 0 0 var(--size-xxs) ${p => p.theme.color.primary.light};
  }
`;

// >>> Photo
const StyledButtonPhoto = styled(StyledButton)`
  box-shadow: 0 0 0 0 transparent;
  background-color: unset;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 0;

  &:hover {
    box-shadow: 0 0 0 var(--size-xxs) ${p => p.theme.color.primary.main};
    color: ${p => p.theme.color.primary.main};
  }

  &:focus {
    box-shadow: 0 0 0 var(--size-xs) ${p => p.theme.color.primary.light};
  }

  &:active {
    color: ${p => p.theme.color.primary.dark};
    box-shadow: 0 0 0 var(--size-xxs) ${p => p.theme.color.primary.light};
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export class Button extends Component {
  static defaultProps = {
    variant: ""
  };

  render() {
    const { variant } = this.props;

    switch (variant) {
      case "primary":
        return (
          <StyledButtonPrimary {...this.props}>
            {this.props.children}
          </StyledButtonPrimary>
        );

      case "secondary":
        return (
          <StyledButtonSecondary {...this.props}>
            {this.props.children}
          </StyledButtonSecondary>
        );

      case "text":
        return (
          <StyledButtonText {...this.props}>
            {this.props.children}
          </StyledButtonText>
        );

      case "photo":
        return (
          <StyledButtonPhoto {...this.props}>
            {this.props.children}
          </StyledButtonPhoto>
        );

      default:
        return (
          <StyledButtonPrimary {...this.props}>
            {this.props.children}
          </StyledButtonPrimary>
        );
    }
  }
}

export default Button;
