const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


main()
    .then(() => {
        console.log("MongoDB connection successful");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

// initilizing database
const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "65e95bcb5776e12641ad30e0",
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();