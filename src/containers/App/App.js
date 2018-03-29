import React from "react";
import Dialog from "../../components/Dialog/Dialog";
import List from "../ListContainer/ListContainer";

export default class App extends React.Component {
    state = {
        data: null,
    };

    handleSelect(data) {
        this.setState({ data });
    }

    render() {
        return (
            <div>
                <h2>Odisee Crypto</h2>
                <Dialog data={this.state.data} />
                <List onSelect={this.handleSelect.bind(this)} />
            </div>
        );
    }
}
