module.exports = (req, res, next) => {
  if(req.user.credits < 1){
    return resolve.status(403).send({eror: 'Not enough credits!'});
  }

  next();
}