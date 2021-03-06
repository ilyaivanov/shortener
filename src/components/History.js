import React, {PropTypes} from 'react';
import Shortened from './ShortenedLink';
import {Button, Panel, ListGroup, ListGroupItem, Badge} from 'react-bootstrap';

let history = props => {
    let mapItem = (item, i) => (
        <ListGroupItem key={i}>
            <Shortened copyLinkToClipboard={props.copyLinkToClipboard}
                       shortened={item}/>
        </ListGroupItem>);

    var header = <div>History
        <Badge>{props.history.length}</Badge>
        <Button onClick={props.clearHistory}
                className="btn btn-default btn-xs pull-right">clear</Button>
    </div>;

    return (
        <Panel className="history-panel " header={header}>
            <ListGroup fill>
                {props.history.map(mapItem)}
            </ListGroup>
        </Panel>
    );
};


history.propTypes = {
    history: PropTypes.array.isRequired,
    clearHistory: PropTypes.func.isRequired,
    copyLinkToClipboard: PropTypes.func.isRequired
};

export default history;