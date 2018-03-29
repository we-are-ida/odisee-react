import React from "react";

import Dialog from "../../components/Dialog/Dialog";
import Header from "../../components/Header/Header";
import List from "../ListContainer/ListContainer";

const MOCK_LIST_DATA = [
    {
        label: "Bitcoin",
        value: "$8,524.01",
    },
    {
        label: "Ethereum",
        value: "$535.17",
    },
    {
        label: "Ripple",
        value: "$0.691525",
    },
    {
        label: "Bitcoin Cash",
        value: "$998.62",
    },
    {
        label: "Litecoin",
        value: "$159.45",
    },
];

export default class App extends React.Component {
    state = {
        selected: null,
        currency: "EUR",
    };

    get selected() {
        const { selected } = this.state;
        return MOCK_LIST_DATA.find(entry => entry.label === selected);
    }

    handleCurrencyChange(currency) {
        this.setState({
            currency,
        });

        if (currency !== this.state.currency) {
            console.log(`TODO: Reload with ${currency} as currency.`);
        }
    }

    handleSelect(selected) {
        this.setState({ selected: selected.label });
    }

    componentWillMount() {
        console.log("TODO: Do initial data loading!");
    }

    render() {
        const { currency, selected } = this.state;
        return (
            <div>
                <Header
                    currency={currency}
                    onCurrencySelect={this.handleCurrencyChange.bind(this)}
                    onReloadRequest={() =>
                        console.log("TODO: Trigger a reload")
                    }
                >
                    Odisee Crypto
                </Header>
                <Dialog data={this.selected} />
                <List
                    data={{
                        data: MOCK_LIST_DATA,
                        loading: false,
                        error: null,
                    }}
                    onRetry={() => console.log("TODO: Trigger a reload")}
                    onSelect={this.handleSelect.bind(this)}
                    active={selected}
                />
            </div>
        );
    }
}
