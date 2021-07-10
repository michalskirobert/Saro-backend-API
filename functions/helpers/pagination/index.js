function paginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);
    const startIndex = (page - 1) * size;
    const endIndex = page * size;

    let items = {};

    items.totalCount = model.length;

    if (endIndex < (await model.countDocuments().exec())) {
      items.next = { page: page + 1, size: size };
    }

    if (startIndex > 0) {
      items.previous = {
        page: page - 1,
        size: size,
      };
    }

    try {
      items.items = await model.find().limit(size).skip(startIndex).exec();
      res.paginatedResults = items;
      next();
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  };
}

module.exports = paginatedResults;
