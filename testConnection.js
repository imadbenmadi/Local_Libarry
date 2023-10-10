const path = require("path");
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const mongoDB = "mongodb://0.0.0.0:27017/local_library"; // Corrected URI

main().catch((err) => console.log(err));

async function main() {
    try {
        await mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
        // Your code here
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
