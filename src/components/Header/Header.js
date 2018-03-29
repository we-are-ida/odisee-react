import Style from "./Header.css";

import React from "react";
import PropTypes from "prop-types";

import CurrencySelector from "../CurrencySelector/CurrencySelector";
import ReloadButton from "../ReloadButton/ReloadButton";

const Header = ({
    children,
    loading,
    currency,
    onCurrencySelect,
    onReloadRequest,
}) => (
    <header className={Style.header}>
        <h2>{children}</h2>
        <span className={Style["currency-select"]}>
            Currency:&nbsp;
            <CurrencySelector value={currency} onSelect={onCurrencySelect} />
        </span>
        <ReloadButton onClick={onReloadRequest} loading={loading} />
    </header>
);

Header.propTypes = {
    loading: PropTypes.bool,
    currency: PropTypes.string.isRequired,
    onCurrencySelect: PropTypes.func.isRequired,
    onReloadRequest: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
};

export default Header;
