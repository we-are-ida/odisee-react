import React from "react";
import List from "../../components/List/List";
import PropTypes from "prop-types";

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
export default class ListContainer extends React.Component {
    static propTypes = {
        onSelect: PropTypes.func.isRequired,
    };

    render() {
        return <List data={MOCK_LIST_DATA} onSelect={this.props.onSelect} />;
    }
}
