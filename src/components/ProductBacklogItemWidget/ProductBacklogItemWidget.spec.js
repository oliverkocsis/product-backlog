import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductBacklogItemWdiget from "./ProductBacklogItemWidget";

test('The `product backlog item` is what needed to improve the product with the details, such as `title`, `description`, `order`, and `size`.', () => {
    const mockProductBacklogItem = {
        id: 0,
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        order: 1,
        size: 2
    };

    render(
        <ProductBacklogItemWdiget productBacklogItem={mockProductBacklogItem} />);
    expect(screen.getByText('Lorem Ipsum')).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
});
