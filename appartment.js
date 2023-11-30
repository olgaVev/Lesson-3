
function getDetails(appartment_object) {
    let result = "The appartment on " + appartment_object.street + ", " + appartment_object.city + " costs " + appartment_object.price +
        " dollars and has " + appartment_object.rooms.length + " rooms in total";
    return result;
}

const appartment1 = {
    city: "New-York",
    street: "5th Avenue",
    price: 5000,
    rooms: ["living", "dining", "kitchen", "laundry111", "bedroom1", "bedroom2"]

}

const appartment2 = {
    city: "Toronto",
    street: "Steeles",
    price: 3000,
    rooms: ["dining", "kitchen", "laundry", "bedroom1", "bedroom2"]
}
console.log(getDetails(appartment1));
console.log(getDetails(appartment2))