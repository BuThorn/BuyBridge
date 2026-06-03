export async function register(req, res) {
  res.status(201).json({
    message: "Registration endpoint placeholder",
    email: req.body.email,
  });
}

export async function login(req, res) {
  res.json({
    message: "Login endpoint placeholder",
    email: req.body.email,
  });
}
