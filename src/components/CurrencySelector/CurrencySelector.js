import Style from "./CurrencySelector.css";

import React from "react";
import PropTypes from "prop-types";

const CurrencySelector = ({ onSelect, value, currencies }) => (
    <select
        className={Style.select}
        value={value}
        onChange={event => onSelect(event.target.value)}
    >
        {currencies.map(currency => (
            <option key={currency} value={currency}>
                {currency}
            </option>
        ))}
    </select>
);

CurrencySelector.propTypes = {
    onSelect: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    currencies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

CurrencySelector.defaultProps = {
    currencies: ["EUR", "USD", "GBP"],
};

export default CurrencySelector;
