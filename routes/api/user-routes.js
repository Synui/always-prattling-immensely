const router = require('express').Router();

const {
    getAllUser,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

// set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

    // set up GET one, PUT and DELETE at api/users/:id
router
    .route('/:id')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;