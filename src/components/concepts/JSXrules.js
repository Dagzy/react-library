import React from 'react';
import {
    Container, Row, Col
} from 'reactstrap';

const JSXrules = function () {

    return(
        <Fatty />
    )
}

export default JSXrules;

const Fatty = () =>
<Container className="main">
    <Row>
        <Col xs="12">
        <dl>
        <dt>Resembles HTML</dt>
        <dd>It's not HTML. Closer to JavaScript.</dd>
        <dt>React.createElement()</dt>
        <dd>Used to construct and update the DOM.</dd>
        <dt>Not required.</dt>
        <dd>Developers don't have to use JSX.</dd>
        </dl>
        </Col>
    </Row>
</Container>
