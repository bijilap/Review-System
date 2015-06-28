var mongoose = require('mongoose');
Schema = mongoose.Schema;

AggreRatingSchema = new Schema(
  ratingOf: {
    type: String
  },
  ratingScore: {
    type: Number
  },
  reviewerCount: {
    type: Number
  }
);

module.exports = mongoose.model('AggreRating', ReviewSchema);
