import { writable } from "svelte/store";

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
    subscribe : orders.subscribe,
    addCOrder: (orderData) => {
       const newOrder = {
           ...orderData,
           id: Math.random().toString()
       };
       orders.update(items => {
           return [newOrder, ...items]
       });
    },
    updateOrder: (id, orderData) => {
        orders.update(items => {
           const orderIndex = items.findIndex(i => i.id === id);
           const updatedOrder = {...items[orderIndex], ...orderData };
           const updatedOrders = [... items];
           updatedOrders[orderIndex] = updatedOrder;
           return updatedOrders;
        })
    },
    deleteOrder: (id) => {
        orders.update(items => {
            return items.filter(i => i.id !== id);
        });
    }
}

export default customOrdersStore;