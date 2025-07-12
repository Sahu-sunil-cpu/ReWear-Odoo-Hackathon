import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({

    title: {
        type: String
    },
    content: {
        type: String,
    },
    labels: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Label'
        }
    ],
    isPinned: {
        type: Boolean,
        default: false
    },
    isArchived: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    color: {
        type: String,
        default: "#ffffff"
    },
    reminder: {
        type: String
    },
    priority: {
        appear: {
            type: Boolean,
            default: false
        },
        value: {
            type: Number,
            min: [1, "Value must be greater than 0"],
            default: 1
        }
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    select: {
        type: Boolean,
        default: false
    },
    list: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'List'
        }
    ]

}, { timestamps: true });

export const Notes = mongoose.model('Note', notesSchema);
