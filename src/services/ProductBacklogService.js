const mockProductBacklogItem = {
    id: 0,
    title: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    order: 0,
    size: 2
};

const mockProductBacklog = [
    { ...mockProductBacklogItem, id: 0, order: 1 },
    { ...mockProductBacklogItem, id: 1, order: 0 }
]

export function getProductBacklog() {
    return mockProductBacklog;
}