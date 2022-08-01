// Import required models for controller
const { User, Thought } = require('../models');

// Get all users
module.exports = {
    getUsers(req, res) {
        User.find()
        .select('-__v')
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    // Get a single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select('__v')
        .populate('friends')
        .populate('thoughts')
        .then((user) =>
        !user
            ? res.status(404).json({ message: 'No user found with that id!' })
            : res.json(user)
            ).catch((err) => res.status(500).json(err));
    },
    // Creates a new user
    createUser(req, res) {
        User.create(req.body)
            .then((userData) => res.json(userData))
            .catch((err) => res.status(500).json(err));
    },
    // Update a user
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { new: true }
        )
        .then((user) => 
            !user
                ? res.status(404).json({ message: 'No user with this ID!' })
                : res.json(user)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    // Delete user and BONUS remove their thoughts
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
        .then((user) => 
        !user
            ? res.status(404).json({ message: 'No such user exists!' })
            : Thought.findOneAndUpdate(
                { users: req.params.userId },
                { $pull: { users: req.params.userId } },
                { new: true }
            )
        )
        .then((thought) => 
            !thought
                ? res.status(404).json({ message: 'User deleted, but no thoughts found!' })
                : res.json({ message: 'User and thoughts successfully deleted!' })
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    // Add friend to friendlist
    addFriend(req, res) {
        console.log('You are adding a friend');
        console.log(req.body);
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        )
        .then((user) =>
        !user
            ? res.status(404).json({ message: 'No user found with that ID!' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Remove friend from friendlist
    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true }
        )
        .then((user) => 
        !user
            ? res.status(404).json({ message: 'No user found with that ID!' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
};