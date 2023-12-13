import dotenv from 'dotenv';
dotenv.config();

function required(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue;
  if (value == null) {
    throw new Error(`Key ${key} is undefined`);
  }
  return value;
}

export const config = {
  jwt: {
    secretKey: required('JWT_SECRET', 'F2dN7x8HVzBWaQuEEDnhsvHXRWqAR63z'),
    expiresInSec: parseInt(required('JWT_EXPIRES_SEC', 86400)),
  },
  bcrypt: {
    saltRounds: parseInt(required('BCRYPT_SALT_ROUNDS', 12)),
  },
  host: {
    port: parseInt(required('HOST_PORT', 80)),
  },
  db: {
    host: required('DB_HOST', "db.inter-pick-roll.xyz"),
    user: required('DB_USER', "root"),
    database: required('DB_DATABASE', "pickandroll"),
    password: required('DB_PASSWORD', 'password'),
  },
};
