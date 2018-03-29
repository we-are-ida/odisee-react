import Style from "./Error.css";

import React from "react";
import PropTypes from "prop-types";

const Error = ({ children, onRetry }) => (
    <div className={Style.error}>
        <div>
            {children || "Er ging iets mis. Gelieve het opnieuw te proberen"}
        </div>
        {onRetry && (
            <a
                className={Style.button}
                onClick={event => {
                    event.preventDefault();
                    onRetry();
                }}
            >
                Probeer opnieuw
            </a>
        )}
    </div>
);

Error.propTypes = {
    children: PropTypes.string,
    onRetry: PropTypes.func,
};

export default Error;
