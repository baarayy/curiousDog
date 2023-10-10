const notFound = (req, res) => {
  res.status(404).json({
    message: "Couldn't find this route",
  });
};
module.exports = notFound;
