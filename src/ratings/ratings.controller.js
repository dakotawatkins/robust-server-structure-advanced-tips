const ratings = require("../data/ratings-data");

function ratingExists(request, response, next) {
  const { ratingId } = request.params;
  const foundRating = ratings.find((rating) => rating.id === Number(ratingId));
  
  if (foundRating) {
    response.locals.rating = foundRating;
    return next();
  }
  
  next({
    status: 404,
    message: `Rating id not found: ${ratingId}`,
  });
}



function list(request, response) {
  console.log(request.params)
  const filteredRatings = ratings.filter(
    (rating) =>
      !request.params.noteId || rating.noteId == Number(request.params.noteId)
  );
  
  response
    .json({ data: filteredRatings });
}



function read(request, response, next) {
  response
    .json({ data: response.locals.rating });
}


module.exports = {
  list,
  read: [ratingExists, read],
};
