import Style from "./ReloadButton.css";

import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import FontAwesome from "@fortawesome/react-fontawesome";
import FaSync from "@fortawesome/fontawesome-free-solid/faSync";

export default class ReloadButton extends Component {
    static propTypes = {
        loading: PropTypes.bool,
        onClick: PropTypes.func.isRequired,
    };

    handleClick(event) {
        event.preventDefault();

        this.props.onClick();
    }

    render() {
        const { loading } = this.props;

        return (
            <a
                className={classnames(Style.button, {
                    [Style.loading]: loading,
                })}
                onClick={this.handleClick.bind(this)}
            >
                <FontAwesome icon={FaSync} />
            </a>
        );
    }
}
