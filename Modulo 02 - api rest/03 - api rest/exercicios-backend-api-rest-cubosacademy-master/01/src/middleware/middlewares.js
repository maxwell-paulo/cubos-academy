const passwordValidation = (req, res, next) => {
  const { senha } = req.query;

  if (senha !== "cubos123") {
    return res.status(401).json({ message: "A senha está incorreta" });
  }

  next();
};

export default passwordValidation;
