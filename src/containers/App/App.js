import React from "react";

import ApiClient from "../../api-client.js";

import Dialog from "../../components/Dialog/Dialog";
import Header from "../../components/Header/Header";
import List from "../ListContainer/ListContainer";

export default class App extends React.Component {
    state = {
        data: {
            loading: false,
            data: null,
            error: null,
            __cache: {
                currency: null,
            },
        },
        selected: null,
        currency: "EUR",
    };

    get selected() {
        const { selected, data: { data } } = this.state;
        return data && data.find(entry => entry.label === selected);
    }

    load(force = false) {
        const { data: { loading, data, __cache }, currency } = this.state;

        if (loading || (!force && data && currency === __cache.currency)) {
            // Already loaded or already loading, short circuit
            return;
        }

        // Set loading state
        this.setState({
            data: {
                data: null,
                error: null,
                loading: true,
                __cache: {
                    currency: currency,
                },
            },
        });

        ApiClient.getList(currency)
            .then(data =>
                this.setState({
                    data: {
                        loading: false,
                        data,
                        error: null,
                        __cache: {
                            currency,
                        },
                    },
                }),
            )
            .catch(error =>
                this.setState({
                    data: {
                        loading: false,
                        data: null,
                        error: error.message || error,
                        __cache: {
                            currency,
                        },
                    },
                }),
            );
    }

    handleCurrencyChange(currency) {
        // Update the state. Once this is updated =>
        // Trigger een reload request. De load method zal zelf bepalen of een
        // api call nodig is.
        this.setState(
            {
                currency,
            },
            this.load.bind(this),
        );
    }

    handleSelect(selected) {
        this.setState({ selected: selected.label });
    }

    componentWillMount() {
        // Trigger een load verzoek voordat het component in de rendering tree
        // komt.
        this.load();
    }

    render() {
        const { currency, selected, data } = this.state;
        return (
            <div>
                <Header
                    currency={currency}
                    onCurrencySelect={this.handleCurrencyChange.bind(this)}
                    onReloadRequest={() => this.load(true)}
                    loading={data.loading}
                >
                    Odisee Crypto
                </Header>
                <Dialog data={this.selected} />
                <List
                    data={data}
                    onRetry={this.load.bind(this)}
                    onSelect={this.handleSelect.bind(this)}
                    active={selected}
                />
            </div>
        );
    }
}
