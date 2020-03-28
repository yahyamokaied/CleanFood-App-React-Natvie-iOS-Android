import { ADD_ORDER } from "../actions/orders";
import Order from "../../models/order";

const initialState = {
orders: []
};

export default (state = initialState, action) => {
    switch (action.type)
    {
        case ADD_ORDER:
            // Date is javascript
            const newOrder = new Order(
            new Date().toString(),
            action.orderData.items,
            action.orderData.amount,
            new Date()
            );
            return {
                ...state,
                //concat javascript add new item in array and return new array include that item
                //so allowd us to dont touch the orginal array
                orders: state.orders.concat(newOrder)
            };
    }
    return state;
}