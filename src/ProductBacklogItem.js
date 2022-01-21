import React from 'react';
import PropTypes from 'prop-types';

function ProductBacklogItem(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>Description</h2>
            <p>{props.description}</p>
            <h2>Order</h2>
            <p>{props.order}</p>
            <h2>Size</h2>
            <p>{props.size}</p>
        </div>
    );
}

ProductBacklogItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    size: PropTypes.number
};

export default ProductBacklogItem;
