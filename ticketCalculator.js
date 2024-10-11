let age = 130;
let isStudent = true;
let ticketFare = 800;
let discount;
if (age < 10) {
    ticketFare = 0;
}
else if (isStudent) {
    discount = ticketFare * 50 / 100;
    ticketFare = ticketFare - discount;
}
else if (age >= 60) {
    discount = ticketFare * 15 / 100;
    ticketFare = ticketFare - discount;
}

console.log(ticketFare);