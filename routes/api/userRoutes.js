const router = require('express').Router();

// All functions from User controller
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

// /api/users routes
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId for GET, PUT, and DELETE routes
router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friends route
router.route('/:userId/friends').post(addFriend);

// /api/users/:userId/friends/:friendId route
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;