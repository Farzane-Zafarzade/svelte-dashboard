import { writable } from "svelte/store";

// Creates and initials orders 
const orders = writable([
    {id:"#SK2540", billingName: "Neal Matthews", date: "07 Oct, 2021", total: "$400", paymentStatus:"Paid"},
    {id:"#SK2541", billingName: "Jamal Burnett", date: "07 Oct, 2021", total: "$400", paymentStatus:"Chargeback"},
    {id:"#SK2542", billingName: "Juan Mitchell", date: "06 Oct, 2021", total: "$400", paymentStatus:"Paid"},
    {id:"#SK2543", billingName: "Barry Dick", date: "06 Oct, 2021", total: "$400", paymentStatus:"Refund"},
    {id:"#SK2544", billingName: "Ronald Taylor", date: "06 Oct, 2021", total: "$400", paymentStatus:"Paid"},
    {id:"#SK2545", billingName: "Jacob Hunter", date: "06 Oct, 2021", total: "$400", paymentStatus:"Paid"},
    {id:"#SK2546", billingName: "William Cruz", date: "06 Oct, 2021", total: "$400", paymentStatus:"Paid"},
    {id:"#SK2547", billingName: "Dustin Moser", date: "06 Oct, 2021", total: "$400", paymentStatus:"Chargeback"},
    {id:"#SK2548", billingName: "Clark Benson", date: "06 Oct, 2021", total: "$400", paymentStatus:"Paid"}
  ]);
    
  const customOrdersStore = {

    //Allows interested parties to be notified whenever the store value changes.
    subscribe : orders.subscribe,

    //takes a orderData object as a parameter and adds it to the orders.
    //Creates id and add it to the orderData
    addCOrder: (orderData) => {
       const newOrder = {
           ...orderData,
           id: Math.random().toString()
       };
       orders.update(items => {
           return [newOrder, ...items]
       });
    },

    //Takes the orderData object and id as parameters and updates the order's data into the orders.
    updateOrder: (id, orderData) => {
        orders.update(items => {
           const orderIndex = items.findIndex(i => i.id === id);
           const updatedOrder = {...items[orderIndex], ...orderData };
           const updatedOrders = [... items];
           updatedOrders[orderIndex] = updatedOrder;
           return updatedOrders;
        })
    },

     //Takes a id as parameters and deletes the order with the same id from the orders.
    deleteOrder: (id) => {
        orders.update(items => {
            return items.filter(i => i.id !== id);
        });
    }
}

export default customOrdersStore;