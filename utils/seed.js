const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { randomUser, randomThought } = require('./data');

// Establishes connection the db, with error if not connected
connection.on('error', (err) => err);
connection.once('open', async () => {
    console.log('connected');

    // Drops existing users
    await User.deleteMany({});

    // Drops existing thoughts
    await Thought.deleteMany({});

    // Empy arrays to hold users and thoughts
    const users = [];
    const thoughts = [];

    // Loop 20 times to add users to array
    for (let i = 0; i < 20; i++) {
        // Random objects from helper function imported from data.js
        const username = randomUser();
        const email = `${username}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}@socialdev.com`;

        users.push({
            username,
            email,
        });

        // Another loop to add thoughts to array
        for (let i = 0; i < 5; i++) {
            // Random objects from helper function imported from data.js
            const thoughtText = randomThought();

            thoughts.push({
                thoughtText,
                username,
            });
        }
    }

    // Add users to collection and await the results
    await User.collection.insertMany(users);

    // Add thoughts to collection and await the results
    await Thought.collection.insertMany(thoughts);

    // Log out the seed data to indicate what should appear in the db
    console.table(users);
    console.info('Seeding complete! 🌱');
    process.exit(0);
})