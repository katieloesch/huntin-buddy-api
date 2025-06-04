import {
  BadRequestError,
  UnauthenticatedError,
  UnauthorizedError,
} from '../errors/customErrors.js';
import { verifyJWT } from '../utils/tokenUtils.js';

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    throw new UnauthenticatedError('authentication invalid'); // 401
  }

  try {
    const { userId, role } = verifyJWT(token);
    const testUser = userId === '66ce7a566e688169f951df42';
    req.user = { userId, role, testUser };

    next();
  } catch (error) {
    throw new UnauthenticatedError('authentication invalid'); // 401
  }
};

export const authorisePermissions = (...roles) => {
  return (req, res, next) => {
    console.log(roles);
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError('unauthorised to access this route');
    }
    next();
  };
};

export const checkForTestUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError('Demo User. Read Only!');
  }
  next();
};
