import {MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017"; // MongoDB URI (Local or from .env) const dbName = 'sports_league'; // Your database name
const dbName = 'sports_league';

let db;

export const connectDB = async ()=> {
    if (db) return db;
    try {
        const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }); console.log("Connected to MongoDB");
        db = client.db (dbName);
        return db;
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        throw error;
    }
};
