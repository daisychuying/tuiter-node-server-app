import mongoose from 'mongoose';

const schema = mongoose.Schema({
    tuit: {type: String, required: true},
    likes: {type: Number, default: 0},
    liked: {type: Boolean, default: false},
    dislikes: {type: Number, default: 0},
    handle: {type: String, required: false},
    userName: {type: String, required: false},
    time: {type: String, required: false},
    image: {type: String, required: false},
    title: {type: String, required: false},
    topic: {type: String, required: false},
}, {collection: 'tuits'});
export default schema;