import React from "react";
import {Button, Label, Step, Message, Icon} from 'semantic-ui-react'

export default class Counter extends React.Component {
    decrement = () => {
        this.props.decrement();
    };

    increment = () => {
        this.props.increment();
    };

    render() {
        const MessageExampleIcon = () => (
            <Message icon>
                <Icon name='sync' loading/>
                <Message.Content>
                    <Message.Header>Just one second</Message.Header>
                    We are fetching that content for you.
                </Message.Content>
            </Message>
        );

        const StepExampleOrdered = () => (
            <Step.Group ordered size='tiny'>
                <Step completed>
                    <Step.Content>
                        <Step.Title>Shipping</Step.Title>
                        <Step.Description>Choose your shipping options</Step.Description>
                    </Step.Content>
                </Step>

                <Step completed>
                    <Step.Content>
                        <Step.Title>Billing</Step.Title>
                        <Step.Description>Enter billing information</Step.Description>
                    </Step.Content>
                </Step>

                <Step active>
                    <Step.Content>
                        <Step.Title>Confirm Order</Step.Title>
                    </Step.Content>
                </Step>
            </Step.Group>
        );

        return <div>
            <br/>
            <MessageExampleIcon/>
            <br/>
            <StepExampleOrdered/>
            <br/>
            <Button onClick={this.decrement}>-</Button>
            &nbsp;<Label circular color={"teal"} key={"teal"}>{this.props.count}</Label>&nbsp;
            <Button onClick={this.increment}>+</Button>
        </div>
    }
}