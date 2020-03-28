import Product from '../models/Product';

const PRODUCTS = [
    new Product(
        'p1',
        'u1',
        'Red Shirt',
        'https://i.picsum.photos/id/0/5616/3744.jpg',
        'A red t-shirt, prefer for days',
        29.99
    ),
    new Product(
        'p2',
        'u1',
        'Blue Shirt',
        'https://i.picsum.photos/id/10/2500/1667.jpg',
        'A Blue t-shirt, prefer for days',
        23.39
    ),
    new Product(
        'p3',
        'u2',
        'Green Shirt',
        'https://i.picsum.photos/id/1011/5472/3648.jpg',
        'A Green t-shirt, prefer for days',
        21.19
    )
];
export default PRODUCTS;
