import React from 'react';

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
            job: '',
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

export default class App extends React.Component {
    state = {
        characters: [
            {
                name: "adeola",
                jobs: "ojo",
            },
            {
                name: "bolaji",
                jobs: "ojo",
            }
        ]
    };

    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] })
    };

    removeCharacter = index => {
        const {characters} = this.state;
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        })
    };

    render() {
        return (
            <div>
                <Table characterData={this.state.characters} removeCharacter={this.removeCharacter}/>
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
