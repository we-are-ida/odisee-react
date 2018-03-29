import React from "react";
import PropTypes from "prop-types";
import "./List.css";

export default class List extends React.Component {
    render() {
        return <div className="list" />;
    }
}

List.propTypes = {
    data: PropTypes.array.isRequired,
};
