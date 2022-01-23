import React from 'react';
import PropTypes from 'prop-types';

function ProductBacklogItemWdiget(props) {
    const productBacklogItem = props.productBacklogItem

    return (
        <div>
            <div>
                <strong>
                    <span>{productBacklogItem.order}</span>.
                    <span>{productBacklogItem.title}</span>
                </strong>
            </div>
            <div>
                <span>{productBacklogItem.description}</span> 
                (<span>{productBacklogItem.size}</span>)
            </div>
        </div>
    );
}

ProductBacklogItemWdiget.propTypes = {
    productBacklogItem: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        order: PropTypes.number,
        size: PropTypes.number
    })
};

export default ProductBacklogItemWdiget;
