import React from "react";
import PropTypes from "prop-types";
import Style from "./List.css";

export default class ListItem extends React.Component {
    static propTypes = {
        data: PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        }).isRequired,
        onSelect: PropTypes.func.isRequired,
    };

    onClickHandler() {
        this.props.onSelect(this.props.data);
    }

    render() {
        const { data } = this.props;

        return (
            <div
                className={Style["list-item"]}
                onClick={this.onClickHandler.bind(this)}
            >
                <span className={Style.label}>{data.label}</span>
                <span className={Style.value}>{data.value}</span>
            </div>
        );
    }
}
