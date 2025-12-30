export const add = (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  if (a == NaN || b == NaN) {
    return res.status(400).send({
      error: "Invalid numbers",
    });
  } else {
    return res.status(200).send({
      result: a + b,
    });
  }
};

export const subtract = (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  if (a == NaN || b == NaN) {
    return res.status(400).send({
      error: "Invalid numbers",
    });
  } else {
    return res.status(200).send({
      result: a - b,
    });
  }
};

export const multiply = (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  if (a == NaN || b == NaN) {
    return res.status(400).send({
      error: "Invalid numbers",
    });
  } else {
    return res.status(200).send({
      result: a * b,
    });
  }
};

export const divide = (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  if (a == NaN || b == NaN || b == 0) {
    return res.status(400).send({
      error: "Invalid numbers",
    });
  } else {
    return res.status(200).send({
      result: a / b,
    });
  }
};
