import { Buffer } from "buffer";

const INFURA_ID = "2H65vK3QAz5b84T7d8Sb61syQqM";
const INFURA_SECRET_KEY = "63f428ab8c765a5c52f45e588db99b9a";
const token = Buffer.from(INFURA_ID + ":" + INFURA_SECRET_KEY).toString(
  "base64"
);

export default token;
