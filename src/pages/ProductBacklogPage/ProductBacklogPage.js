import React, { useState } from 'react';
import './ProductBacklogPage.css'
import ProductBacklogItemWidget from '../../components/ProductBacklogItemWidget/ProductBacklogItemWidget';
import { getProductBacklog } from '../../services/ProductBacklogService';

function ProductBacklogPage() {

    const [productBacklogItems, setProductBacklogItems] = useState(getProductBacklog());

    const createProductBacklogItem = function () {
        setProductBacklogItems([...productBacklogItems, { ...productBacklogItems[0], id: productBacklogItems.length, order: productBacklogItems.length }]);
    };

    return (
        <div className='ProductBacklogPage'>
            <button onClick={createProductBacklogItem}>Create Product Backlog Item</button>
            {productBacklogItems.map((productBacklogItem) => (
                <ProductBacklogItemWidget key={productBacklogItem.id} productBacklogItem={productBacklogItem} />
            ))}
        </div>
    );
}

export default ProductBacklogPage;

