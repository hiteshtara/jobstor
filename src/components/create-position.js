import React from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

class CreatePositionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      department: '',
      date: new Date(),
      status: "Open",
      applications: 0
    };
    this.myRef = React.createRef();
  }

  savePosition = (addAnother = false) => {
    const { positions, setSavedPositions } = this.props;

    const newItem = { ...this.state, id: Date.now() };
    if (
      !this.myRef ||
      !this.myRef.current ||
      this.myRef.current.checkValidity() === false
    )
      return;

    if (!positions) setSavedPositions([newItem]);
    else setSavedPositions([...positions, newItem]);

    if (addAnother) {
      this.setState({
        title: '',
        description: '',
        department: '',
        date: new Date(),
        applications: 0,
        status: "Open"
      });
    } else this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <Form onSubmit={e => e.preventDefault()} ref={this.myRef}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder="Enter title"
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
              required
            />
          </Form.Group>

          <Form.Group controlId="department">
            <Form.Label>Department</Form.Label>
            <Form.Control
              placeholder="Enter department"
              value={this.state.department}
              onChange={e => this.setState({ department: e.target.value })}
              required
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              value={this.state.description}
              onChange={e => this.setState({ description: e.target.value })}
              placeholder="Enter description"
            />
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              defaultValue={this.state.status}
              onChange={e => this.setState({ status: e.target.value })}
              required
            >
              <option>Open</option>
              <option>Closed</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              value={formatDate(this.state.date)}
              onChange={e => this.setState({ date: e.target.value })}
              required
            ></Form.Control>
          </Form.Group>

          <Button
            variant="primary"
            className="mr-2"
            type="submit"
            onClick={() => this.savePosition(false)}
          >
            Save
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => this.savePosition(true)}
          >
            Save and add another
          </Button>
        </Form>
      </div>
    );
  }
}

export const CreatePosition = withRouter(CreatePositionComponent);
