import React from 'react';
import {
    Button,
    Icon,
    Container
} from 'semantic-ui-react'

const Label = (props) => {
    const clickHandler = () => {
        props.increment()
    };

    return <Container>
        <br/>
        <Button as='div' labelPosition='right' onClick={clickHandler}>
            <Button icon>
                <Icon name='heart' />
                Increment
            </Button>
            <Label as='a' basic pointing='left'>
                {props.count}
            </Label>
        </Button>
    </Container>
};

export default Label