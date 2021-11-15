# Robust Server Structure: Advanced Tips
## Instructions

Your task is to extend this API server, which stores "Notes" to enhance the error reporting functionality and add a read-only ratings resource.

## Existing files

Use the existing data files located in src/data for the responses. Feel free to add or remove data from the files as necessary, but keep the same shape of the data.

## Tasks

You should modify this server to meet the following requirements:

1. /notes/:noteId/ratings returns all ratings for the note.
2. /notes/:noteId/ratings/:ratingId returns the rating for the note with the specified rating id, or 404 if the rating id is not associated with the note id.
3. /ratings returns all ratings.
4. /ratings/:ratingId returns the rating the specified id.
5. Remove duplicate code by passing data on the response where appropriate.
6. Return 405 and an error message for all the HTTP methods that are not handled by the router.