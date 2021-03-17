"use strict";


// 1. isHometown
function is_hometown(town){
  if (town === 'san francisco') {
      return true;
  }
}

// 2. getFullName
function get_full_name(first_name, last_name){
    let full_name =  first_name + " " + last_name;
    return full_name;
}

// Define your function here


// 3. calculateTotal

function calculateTotal (base_price, state, tax=0.05) {
    let subtotal = base_price * (1 + tax);

    let fee = 0;
    if (state === 'CA') {
        fee = 0.03 * subtotal;
    } else if (state == 'PA') {
        fee = 2;
    } else if (state == 'MA') {
        if (base_price <= 100) {
            fee = 1;
        } else {
            fee = 3
        }
    }
    return subtotal + fee
} 


// Define your function here
