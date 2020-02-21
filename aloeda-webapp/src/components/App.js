import React, {useRef} from "react";
import {getCharacters} from '../service/api/service'
import Counter from "./Counter/Counter";

const DEFAULT_LOGIN = {
    user: {
        name: process.env.USER_NAME || "adeola",
        password: process.env.USER_PASSWORD || "password",
    },
};

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.jobs}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>delete</button>
                </td>
            </tr>
        )
    });
    return <tbody>{rows}</tbody>;
};

const If = (props) => {
    const condition = props.condition || false;
    const positive = props.then || null;
    const negative = props.else || null;

    return condition ? positive : negative;
};

const TableHeader = () => {
    return <thead>
    <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Action</th>
    </tr>
    </thead>
};

class Table extends React.Component {
    render() {
        const {characterData, removeCharacter} = this.props
        return <table>
            <TableHeader/>
            <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
        </table>
    }
}

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            jobs: '',
        };

        this.state = this.initialState
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    };

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    };

    render() {
        const {name, jobs} = this.state
        return (
            <form>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange}/>
                <label>Job</label>
                <input
                    type="text"
                    name="jobs"
                    id="jobs"
                    value={jobs}
                    onChange={this.handleChange}/>
                <input type="button" value="Submit" onClick={this.submitForm}/>
            </form>
        )
    }
}

const Login = ({onLoginHandler}) => {
    const usernameRef = useRef(DEFAULT_LOGIN.user.name);
    const passwordRef = useRef(DEFAULT_LOGIN.user.password);

    const doLogin = () => {
        onLoginHandler(usernameRef.current.value, passwordRef.current.value)
    };

    return <>
        <br/>
        <input id="user_name" type="text" ref={usernameRef}/>
        <br/>
        <input id="password" type="text" ref={passwordRef}/>
        <br/>
        <button onClick={doLogin}>login</button>
    </>
};

export default class App extends React.Component {
    state = {
        characters: [
            {
                name: DEFAULT_LOGIN.user.name,
                jobs: "ojo",
            },
            {
                name: "bolaji",
                jobs: "ojo",
            }
        ]
    };

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]})
    };

    removeCharacter = index => {
        const {characters} = this.state;
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        })
    };

    onLogin = (username, password) => {
        if (username === DEFAULT_LOGIN.user.name && password === DEFAULT_LOGIN.user.password) {
            alert(`successfully authenticated: ${username}`)
            setTimeout(() => {
                alert('post login action')
            }, 5000)
        } else {
            alert(`your login details are incorrect`)
        }
    };

    componentDidMount() {
        getCharacters()
            .then(res => this.setState({
                characters: res.data
            }))
    }

    render() {
        const loginComponent = <Login onLoginHandler={this.onLogin}/>
        const emptyComponent = <div>nothing to show!</div>

        return (
            <div>
                <Table characterData={this.state.characters} removeCharacter={this.removeCharacter}/>
                <Form handleSubmit={this.handleSubmit}/>

                <If condition={true}
                    then={loginComponent}
                    else={emptyComponent}/>

                <Counter/>
            </div>
        )
    }
}
