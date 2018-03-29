import React from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";
import Style from "./List.css";

export default class List extends React.Component {
    static propTypes = {
        data: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                value: PropTypes.string.isRequired,
            }).isRequired,
        ).isRequired,
        onSelect: PropTypes.func.isRequired,
        active: PropTypes.string,
    };

    get list() {
        const { data, active, onSelect } = this.props;

        return data.map(entry => {
            return (
                <ListItem
                    key={entry.label}
                    data={entry}
                    onSelect={onSelect}
                    active={active === entry.label}
                />
            );
        });
    }
    render() {
        return <div className={Style.list}>{this.list}</div>;
    }
}
