import jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handlers/response.handler.js";
import userModel from "../models/user.model.js";

// Hàm giải mã token từ request
const tokenDecode = (req) => {
  try {
    const bearerHeader = req.headers["authorization"];

    if (bearerHeader) {
      const token = bearerHeader.split(" ")[1];

      return jsonwebtoken.verify(
        token,
        process.env.TOKEN_SECRET
      );
    }

    return false;
  } catch {
    return false;
  }
};

// Middleware xác thực người dùng
const auth = async (req, res, next) => {
  const tokenDecoded = tokenDecode(req);

  if (!tokenDecoded) return responseHandler.unauthorize(res);

  const user = await userModel.findById(tokenDecoded.data);

  if (!user) return responseHandler.unauthorize(res);

  req.user = user;

  next();
};

export default { auth, tokenDecode };