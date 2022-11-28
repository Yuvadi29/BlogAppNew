const mongoose = require('mongoose');

const CatgeorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Catgeory", CatgeorySchema);