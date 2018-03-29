import React from "react";
import PropTypes from "prop-types";
import "../Dialog.css";

export default class Dialog extends React.Component {
    render() {
        return <div className="dialog">Dialog</div>;
    }
}

Dialog.propTypes = {
    data: PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    }),
};
