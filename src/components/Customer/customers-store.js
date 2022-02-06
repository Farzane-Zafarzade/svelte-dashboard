import { writable } from "svelte/store";

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
      subscribe : customers.subscribe,
      addCustomer: (customerData) => {
         const newCustomer = {
             ...customerData,
             ID: Math.random().toString()
         };
         customers.update(items => {
             return [newCustomer, ...items]
         });
      },
      updateCustomer: (id, customerData) => {
          customers.update(items => {
             const customerIndex = items.findIndex(i => i.ID === id);
             const updatedCustomer = {...items[customerIndex], ...customerData };
             const updatedCustomers = [... items];
             updatedCustomers[customerIndex] = updatedCustomer;
             return updatedCustomers;
          })
      },
      deleteCustomer: (id) => {
          customers.update(items => {
              return items.filter(i => i.ID !== id);
          });
      }
  }

  export default customCustomersStore;