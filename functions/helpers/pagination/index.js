function paginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);
    const startIndex = (page - 1) * size;

    let items = {};

    try {
      items.items = await model.find().limit(size).skip(startIndex).exec();
      res.paginatedResults = items;
      items.totalCount = model.length;
      next();
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  };
}

module.exports = paginatedResults;
