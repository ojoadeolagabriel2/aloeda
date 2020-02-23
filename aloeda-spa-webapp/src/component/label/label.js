import React from 'react';
import {
    Divider, Grid, Icon, Segment, Container
} from 'semantic-ui-react'

const Label = (props) => {
    const clickHandler = () => {
        props.increment()
    };

    return <div>
        <br/>
        <Container>
            <Segment>
                <Grid columns={2} relaxed='very'>
                    <Grid.Column textAlign="center">
                        <Icon name="cogs"/> Global Features
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <Icon name="configure"/> Application Specific Features
                    </Grid.Column>
                </Grid>
                <Divider vertical>Or</Divider>
            </Segment>

        </Container>
    </div>
};

export default Label