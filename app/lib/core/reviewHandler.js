"use strict";

var reviewModel = require('../models/reviews');

function createReview(req, resp){
  var reviewBy = req.body.review_by;
  var reviewOn = req.body.review_on;
  var comment = req.body.comment;
  var title = req.body.title | '';
  if(title == ''){
    var len = 15;
    if(len>comment.length){
      len = comment.length;
    }
    title = comment.substring(0, len);
  }
}


module.exports = {
  createReview : createReview
}
