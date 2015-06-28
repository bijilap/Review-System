var mongoose = require('mongoose');
Schema = mongoose.Schema;

ReviewSchema = new Schema(
  {
    timestamp: {
      type : Date,
      default: Date.now
    },
    reviewBy: {
      type: String
    },
    reviewOn: {
      type: String
    },
    title: {
      type: String
    },
    comment: {
      type: String
    },
    rating: {
      type: Number
    },
    sentiment: {
      type: Number
    },
    upVotes: {
      type: Number,
      default: 0
    },
    downVotes: {
      type: Number,
      defualt: 0
    }
  }
);
module.exports = mongoose.model('Review', ReviewSchema);
