import React, { Component, Fragment } from "react";
import styled from "styled-components";
import startCase from "lodash/startCase";

import { Item, Container } from "src/components/blocks";
import { Typography, Button } from "src/components/elements";
import { FormGroup, SelectInput, TextInput } from "src/components/compounds";

const StyledTraineeScheduleEdit = styled.div``;

const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday"
];

export class TraineeScheduleEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schedule: props.schedule,
      isLoading: false,
      errors: {}
    };
  }

  handleInputChange = e => {};

  handleInputToggle = (day, e) => {
    this.setState({
      schedule: {
        ...this.state.schedule,
        [day]: {
          ...this.state.schedule[day],
          isTrainingDay: !this.state.schedule[day].isTrainingDay
        }
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { schedule, isLoading, errors } = this.state;

    return (
      <StyledTraineeScheduleEdit>
        {days.map(day => (
          <Container margin="stack-l" key={day}>
            <Item margin="stack-m">
              <Typography variant="display-4">{startCase(day)}</Typography>
            </Item>

            <Item margin="stack-base">
              <FormGroup>
                <FormGroup.Label title="Is Training Day?" />

                <FormGroup.Input>
                  <TextInput
                    // name={}
                    type="checkbox"
                    checked={schedule[day].isTrainingDay}
                    disabled={isLoading}
                    onChange={() => this.handleInputToggle(day)}
                  />
                </FormGroup.Input>
              </FormGroup>
            </Item>

            {schedule[day].isTrainingDay ? (
              <Fragment>
                <Item margin="stack-base">
                  <FormGroup>
                    <FormGroup.Label title="Start Time" />

                    <FormGroup.Input>
                      <SelectInput
                        value={schedule[day].startTime}
                        options={[
                          {
                            label: "0:00 (12 AM)",
                            value: 0
                          },
                          {
                            label: "1:00 (1 AM)",
                            value: 1
                          },
                          {
                            label: "2:00 (2 AM)",
                            value: 2
                          },
                          {
                            label: "3:00 (3 AM)",
                            value: 3
                          },
                          {
                            label: "4:00 (4 AM)",
                            value: 4
                          },
                          {
                            label: "5:00 (5 AM)",
                            value: 5
                          },
                          {
                            label: "6:00 (6 AM)",
                            value: 6
                          },
                          {
                            label: "7:00 (7 AM)",
                            value: 7
                          },
                          {
                            label: "8:00 (8 AM)",
                            value: 8
                          },
                          {
                            label: "9:00 (9 AM)",
                            value: 9
                          },
                          {
                            label: "10:00 (10 AM)",
                            value: 10
                          },
                          {
                            label: "11:00 (11 AM)",
                            value: 11
                          },
                          {
                            label: "12:00 (12 PM)",
                            value: 12
                          },
                          {
                            label: "13:00 (1 PM)",
                            value: 13
                          },
                          {
                            label: "14:00 (2 PM)",
                            value: 14
                          },
                          {
                            label: "15:00 (3 PM)",
                            value: 15
                          },
                          {
                            label: "16:00 (4 PM)",
                            value: 16
                          },
                          {
                            label: "17:00 (5 PM)",
                            value: 17
                          },
                          {
                            label: "18:00 (6 PM)",
                            value: 18
                          },
                          {
                            label: "19:00 (7 PM)",
                            value: 19
                          },
                          {
                            label: "20:00 (8 PM)",
                            value: 20
                          },
                          {
                            label: "21:00 (9 PM)",
                            value: 21
                          },
                          {
                            label: "22:00 (10 PM)",
                            value: 22
                          },
                          {
                            label: "23:00 (11 PM)",
                            value: 23
                          }
                        ]}
                      />
                    </FormGroup.Input>
                  </FormGroup>
                </Item>

                <Item>
                  <FormGroup>
                    <FormGroup.Label title="Hours" />

                    <FormGroup.Input>
                      <SelectInput
                        value={schedule[day].hours}
                        options={[
                          {
                            label: "1 hour",
                            value: 1
                          },
                          {
                            label: "2 hours",
                            value: 2
                          },
                          {
                            label: "3 hours",
                            value: 3
                          },
                          {
                            label: "4 hours",
                            value: 4
                          },
                          {
                            label: "5 hours",
                            value: 5
                          },
                          {
                            label: "6 hours",
                            value: 6
                          },
                          {
                            label: "7 hours",
                            value: 7
                          },
                          {
                            label: "8 hours",
                            value: 8
                          }
                        ]}
                      />
                    </FormGroup.Input>
                  </FormGroup>
                </Item>
              </Fragment>
            ) : null}
          </Container>
        ))}

        <Item margin="stack-l">
          <FormGroup>
            <FormGroup.Label />

            <FormGroup.Input>
              <Button
                variant="primary"
                onClick={this.handleSubmit}
                disabled={isLoading}
              >
                Save
              </Button>
            </FormGroup.Input>
          </FormGroup>
        </Item>
      </StyledTraineeScheduleEdit>
    );
  }
}

export default TraineeScheduleEdit;
