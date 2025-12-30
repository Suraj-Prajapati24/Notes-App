import client from "../dbConnection.js";

export const signup = async (req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required!",
    });
  }

  const emailPresent = await client.query(
    `SELECT email FROM users where email = '${email}'`
  );
  if (emailPresent.rowCount != 0) {
    return res.status(400).json({
      success: false,
      message: "User already exist!",
    });
  }
  await client.query(
    `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`
  );
  const userInfo = await client.query(
    `SELECT * FROM users WHERE email = '${email}'`
  );
  return res.status(200).send({
    success: true,
    message: "User created successfully",
    user: userInfo.rows[0],
  });
};

export const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required!",
    });
  }

  const userInfo = await client.query(
    `SELECT * FROM users WHERE email = '${email}' and password = '${password}'`
  );

  if (userInfo.rowCount) {
    return res.status(200).send({
      success: true,
      message: "User logged in successfully",
      user: userInfo.rows[0],
    });
  }

  return res.status(400).send({
    success: false,
    message: "Email and Pass doesn't match",
  });
};
