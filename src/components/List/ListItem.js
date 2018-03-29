import React from "react";
import PropTypes from "prop-types";

export default class ListItem extends React.Component {
    render() {
        return (
            <div className="list-item">
                <span className="label">{this.props.label}</span>
                <span className="value">{this.props.value}</span>
            </div>
        );
    }
}

ListItem.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};
