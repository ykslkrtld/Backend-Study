"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const { User } = require("../models/userModel"); // In Object

const passwordEncrypt = require("../helpers/passwordEncrypt");

/* ------------------------------------------------------- */

// Auth Controller

module.exports.auth = {
  login: async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
        // Email&Password: OK

        // const user = await User.findOne({ email: email })
      const user = await User.findOne({ email });

      if (user) {
        // User: OK.

        if (user.password == passwordEncrypt(password)) {
          console.log(user)
            // Password:OK

          // res.send({
          //   message: "Login is successfull",
          // });

            /* Session */

          // req.session = {
          //   email: user.email,
          //   password: user.password
          // }
          // req.session.email = user.email
          req.session._id = user._id // email gözükmemesi için email yerine random gelen id saklanabilir çalınma ihtimaline karşı mail çalınmasın diye
          req.session.password = user.password

            /* Session */


            /* Cookie */

            if(req.body?.remindMe == true) {
              req.session.remindMe = true
              // Set MaxAge
              req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 3
            
            }

            /* Cookie */

            
          res.status(200).send({
            error: false,
            message: 'Login: ok',
            user
          })


        } else {
          res.errorStatusCode = 401;
          throw new Error(" Login parametres are not true");
        }

      } else {
        res.errorStatusCode = 401;
        throw new Error(" This user not found");
      }

    } else {
      res.errorStatusCode = 401;
      throw new Error(" Email and password are required");
    }
  },

  logout: async (req, res) => {

    // Session/Cookie datasını silmek için null yeterli

    req.session = null

    res.status(200).send({
      error: false,
      message: 'logout: OK'
    })

  },
};

/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
