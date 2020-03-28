import PRODUCTS from '../../data/dummy-data';

const initailState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId == 'u1')
};

export default (state = initailState,action) => {
    return state;
};