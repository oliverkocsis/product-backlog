import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductBacklogItem from "./ProductBacklogItem";

test('The `product backlog item` is what needed to improve the product with the details, such as `title`, `description`, `order`, and `size`.', () => {
    const productBacklogItemModel = {
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        order: 1,
        size: 2
    };

    render(
        <ProductBacklogItem
            title={productBacklogItemModel.title}
            description={productBacklogItemModel.description}
            order={productBacklogItemModel.order}
            size={productBacklogItemModel.size}
        />);
    expect(screen.getByText('Lorem Ipsum')).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
});
