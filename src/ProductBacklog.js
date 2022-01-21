import React, { useState } from 'react';
import ProductBacklogItem from './ProductBacklogItem';

function ProductBacklog() {

    const [productBacklogItems, setProductBacklogItems] = useState([1, 2, 3]);

    return (
        <div>
            {productBacklogItems.map(productBacklogItem => <ProductBacklogItem></ProductBacklogItem>)}
        </div>
    );
}

export default ProductBacklog;
