import * as moment from 'moment';

class Order{
    constructor (id, items, totalAmount, date) {
        this.id= id;
        this.items= items;
        this.totalAmount= totalAmount;
        this.date= date;
    }

    get readableDate() { 
        /*  return this.date.toLocaleDateString('en-EN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }); */
var moment = require('moment');
return moment(this.date).format(' YYYY MMMM Do, hh:mm:ss');
        
    }
}

export default Order;