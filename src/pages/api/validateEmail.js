// pages/api/validateEmail.js

import { pingDomain } from "../../utils/pingDomain";

export default async function handler(req, res) {
  const { email } = req.body;

  // Extract domain from email
  const domain = email.split("@")[1];

  // Validate domain
  try {
    const domainExists = await pingDomain(domain);
    if (domainExists) {
      res.status(200).json({ isValid: true });
    } else {
      res.status(400).json({
        isValid: false,
        error: "Domain does not exist or is unreachable.",
      });
    }
  } catch (error) {
    console.error("Error pinging domain:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
