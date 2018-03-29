import React from "react";
import PropTypes from "prop-types";
import Style from "./Dialog.css";

export default class Dialog extends React.Component {
    get info() {
        if (this.props.data) {
            return this.props.data.label;
        }
        return "No coin available";
    }

    render() {
        return <div className={Style.dialog}>{this.info}</div>;
    }
}

Dialog.propTypes = {
    data: PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    }),
};
