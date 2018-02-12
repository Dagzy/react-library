import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div  class="defineList">
        <Button color="dark" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Show Content</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            <div>
            <h1>Functional Component</h1>
            <p>Functional Components allow you to render information to the web page without having 
            to use or change state.
            </p>
            <dl>
                <dt>Presentational</dt>
                <dd>Often used for simply rendering a small chunk of code to the DOM.</dd>
                
                <dt>No 'this' keyword</dt>
                <dd>Unlike Class Components, functional ones don't use 'this'.</dd>

                <dt>No state</dt>
                <dd>These are 'dumb' components for UI</dd>

                <dt>return()</dt>
                <dd>Must return a single element</dd>

            </dl>
        </div>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Example;