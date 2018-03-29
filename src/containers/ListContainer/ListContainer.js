import React from "react";
import PropTypes from "prop-types";

import Error from "../../components/Error/Error";
import List from "../../components/List/List";
import Loading from "../../components/Loading/Loading";

const ListContainer = ({
    data: { data, loading, error },
    onRetry,
    ...rest
}) => {
    if (loading || (!data && !error)) {
        return <Loading />;
    }

    if (data) {
        return <List data={data} {...rest} />;
    }

    return <Error onRetry={onRetry}>{error}</Error>;
};

ListContainer.propTypes = {
    data: PropTypes.shape({
        data: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                value: PropTypes.string.isRequired,
            }).isRequired,
        ),
        error: PropTypes.string,
        loading: PropTypes.bool.isRequired,
    }).isRequired,
    onRetry: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    active: PropTypes.string,
};

export default ListContainer;
