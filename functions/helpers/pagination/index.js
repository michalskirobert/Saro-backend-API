function paginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);
    const startIndex = (page - 1) * size;
    const endIndex = page * size;

    let results = {};

    if (endIndex < (await model.countDocuments().exec())) {
      results.next = { page: page + 1, size: size, totalItems: model.length };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        size: size,
        totalItems: model.length,
      };
    }

    try {
      results.results = await model.find().limit(size).skip(startIndex).exec();
      res.paginatedResults = results;
      next();
    } catch (error) {
      res.status(500).json(error.message);
    }
  };
}

module.exports = paginatedResults;
