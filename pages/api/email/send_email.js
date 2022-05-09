import { Code } from "@mui/icons-material";
const auth = require("../../../utils/gmail-api-auth");
export default function handler(req, res) {
  const client = auth.createClient();
  const { code } = req.query;
  if (code) {
    res.json(code);
  } else {
    auth.getNewCode(client);
  }
}
