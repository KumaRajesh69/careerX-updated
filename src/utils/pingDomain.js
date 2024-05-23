// import ping from "ping";

// export const pingDomain = (domain) => {
//   console.log(domain, "Ping function called");
//   return new Promise((resolve, reject) => {
//     ping.sys.probe(domain, (isAlive) => {
//       resolve(isAlive);
//     });
//   });
// };
// import ping from "ping";

// export const pingDomain = async (domain) => {
//   console.log(domain, "Ping function called");

//   try {
//     const isAlive = await new Promise((resolve, reject) => {
//       ping.sys.probe(domain, (isAlive) => {
//         resolve(isAlive);
//       });
//     });
//     console.log("PINGDOMAIN FUNCTION ----> IS ALIVE", isAlive);
//     return isAlive;
//   } catch (error) {
//     // Handle errors if any
//     console.error("Error pinging domain:", error);
//     throw error; // Rethrow the error
//   }
// };
import axios from "axios";

export const pingDomain = async (domain) => {
  try {
    // Send a GET request to the domain
    const response = await axios.get(`http://${domain}`, { timeout: 5000 }); // Set timeout to 5 seconds

    // Check if the status code indicates a successful response
    if (response.status >= 200 && response.status < 300) {
      return true; // Domain is reachable
    } else {
      return false; // Domain is unreachable
    }
  } catch (error) {
    // Handle errors (e.g., network error, timeout)
    if (error.code === "ENOTFOUND") {
      console.error("Domain not found:", error);
    } else {
      console.error("Error pinging domain:", error);
    }
    return false; // Domain is unreachable
  }
};
