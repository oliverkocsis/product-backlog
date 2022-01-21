import React, { useState } from 'react';
import './ProductBacklog.css'
import ProductBacklogItem from './ProductBacklogItem';


function ProductBacklog() {

    const example = {
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        size: 1
    };

    const [productBacklogItems, setProductBacklogItems] = useState([{ ...example }, { ...example }]);

    return (
        <div className='ProductBacklog'>
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
