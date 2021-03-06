import React, {PropTypes} from 'react';
import Shortened from './ShortenedLink';
import {Collapse, Form, FormControl, ControlLabel, FormGroup, Button} from 'react-bootstrap';

let shorten = props => (
    <div>
        <h1 className="page-header">Shortener</h1>

        <Collapse in={props.isLoading}>
            <div><b>Loading...</b></div>
        </Collapse>

        <Collapse in={(!props.isLoading && !!props.shortened)}>
            <div className="recent-panel">
                <small>Latest link:</small>
                <Shortened copyLinkToClipboard={props.copyLinkToClipboard}
                           shortened={props.shortened}/>
            </div>
        </Collapse>
        <br/>
        <Form>
            <FormGroup>
                <ControlLabel><b>Url</b></ControlLabel>
                <FormControl onChange={e => props.onUrlChange(e.target.value)}
                             type="text"
                             placeholder="https://example.com/very/long/link/indeed"/>
            </FormGroup>
            <Button onClick={props.shorten}>
                Shorten
            </Button>
        </Form>
    </div>);

shorten.propTypes = {
    shorten: PropTypes.func.isRequired,
    onUrlChange: PropTypes.func.isRequired,
    copyLinkToClipboard: PropTypes.func.isRequired,
    shortened: PropTypes.object,
    isLoading: PropTypes.bool.isRequired
};

export default shorten;

