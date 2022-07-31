const router = require('express').Router();
// Gets all functions from thought controller
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts routes
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId routes
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions route
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/response/:responseId route
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
