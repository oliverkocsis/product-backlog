import React, { useState } from 'react';
import './ProductBacklog.css'
import ProductBacklogItem from './ProductBacklogItem';


function ProductBacklog() {

    const example = {
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        order: 1,
        size: 2
    };

    const [productBacklogItems, setProductBacklogItems] = useState([{ ...example }, { ...example }]);

    const createProductBacklogItem = function () {
        setProductBacklogItems([...productBacklogItems, { ...example }]);
    };

    return (
        <div className='ProductBacklog'>
            <button onClick={createProductBacklogItem}>Create Product Backlog Item</button>
            {productBacklogItems.map((productBacklogItem, index) => (
                <ProductBacklogItem
                    key={index}
                    title={productBacklogItem.title}
                    description={productBacklogItem.description}
                    size={productBacklogItem.size}>
                </ProductBacklogItem>
            ))}
        </div>
    );
}

export default ProductBacklog;
