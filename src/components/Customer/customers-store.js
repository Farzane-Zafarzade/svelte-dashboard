import { writable } from "svelte/store";

// Creates and initials customers 
const customers = writable([
    {ID: "m1", firstName: "Neal", lastName: "Matthews", email:"Neal@test.com", mobileNummber:"07212345"},
    {ID: "m2", firstName: "Jamal", lastName: "Burnett", email:"Jamal@test.com", mobileNummber:"07212345" },
    {ID: "m3", firstName: "Juan ", lastName: "Mitchell", email:"Juan@test.com", mobileNummber:"07212345" },
    {ID: "m4", firstName: "Barry", lastName: "Dick", email:"Barry@test.com", mobileNummber:"07212345" },
    {ID: "m5", firstName: "Ronald", lastName: "Taylor", email:"Ronald@test.com", mobileNummber:"07212345" },
    {ID: "m6", firstName: "Jacob", lastName: "Hunter", email:"Jacob@test.com", mobileNummber:"07212345" },
    {ID: "m7", firstName: "William", lastName: "Cruz", email:"William@test.com", mobileNummber:"07212345" },
    {ID: "m8", firstName: "Dustin", lastName: "Moser", email:"Dustin@test.com", mobileNummber:"07212345" },
    {ID: "m8", firstName: "Clark", lastName: "Benson", email:"Clark@test.com", mobileNummber:"07212345" }
  ]);

  const customCustomersStore = {

      //Allows interested parties to be notified whenever the store value changes.
      subscribe : customers.subscribe,

      //takes a customerData object as a parameter and adds it to the customers.
      //Creates id and add it to the customerData
      addCustomer: (customerData) => {
         const newCustomer = {
             ...customerData,
             ID: Math.random().toString()
         };
         customers.update(items => {
             return [newCustomer, ...items]
         });
      },

      // the customerData object and id as parameters and updates the customer’s data into the customers.
      updateCustomer: (id, customerData) => {
          customers.update(items => {
             const customerIndex = items.findIndex(i => i.ID === id);
             const updatedCustomer = {...items[customerIndex], ...customerData };
             const updatedCustomers = [... items];
             updatedCustomers[customerIndex] = updatedCustomer;
             return updatedCustomers;
          })
      },

      //Takes a id as parameters and deletes the customer with the same id from the customers.
      deleteCustomer: (id) => {
          customers.update(items => {
              return items.filter(i => i.ID !== id);
          });
      }
  }

  export default customCustomersStore;