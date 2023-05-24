const User = require('../../models/user')
module.exports = {
    create
  };
  
  async function create(req, res) {
    try {
      const user = await User.create(req.body);
    } catch (err) {
      res.status(400).json(err)
    }
    // // Baby step...
    // res.json({
    //   user: {
    //     name: req.body.name,
    //     email: req.body.email
    //   }
    // });
  }