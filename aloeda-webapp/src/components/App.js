import React from 'react';
import _ from "lodash"

function formatWelcome(data) {
    return `${data} and more`
}

class Heading extends React.Component {
    render() {
        const {users, message = "Hello world!"} = this.props;
        return (<h1>{formatWelcome(message)} total users found: {_.size(users)}</h1>)
    }
}

export default class App extends React.Component {
    render() {
        const users = [
            {
                first_name: "adeola",
                last_name: "ojo",
            },
            {
                first_name: "bolaji",
                last_name: "ojo",
            }
        ];

        return (
            <div className={"container"}>
                <Heading users={users} message={"we are online"}/>
            </div>
        )
    }
}
