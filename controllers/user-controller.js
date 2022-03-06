const { User } = require('../models');

const userController = {
    // get all users
    getAllUser(req, res) {
        User.find({})
            .sort({ _id: -1 })
            .then(user => res.json(user))
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            });
    },
    // get one user
    getOneUser({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'friends',
                select: '-__v'
            })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .then(user => {
                if (!user) {
                    res.status(404).json({ message: 'No pizza found with this id!' });
                    return;
                }
                res.json(user);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // create users
    createUser({ body }, res) {
        User.create(body)
            .then(user => res.json(user))
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            });
    },
    // update user
    updateUser({ params, body }, res) {
        User.findByIdAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(user => {
                if (!user) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(user);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            });
    },
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(user => {
                if (!user) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(user);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            });
    }
}

module.exports = userController;