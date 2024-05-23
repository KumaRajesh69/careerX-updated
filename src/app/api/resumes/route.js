import { NextResponse } from "next/server";
import { pingDomain } from "../../../utils/pingDomain";

// To handle a GET request to /api
export async function GET(request, response) {
  const { email } = request.body;

  const domain = email.split("@")[1];

  const domainExists = await pingDomain(domain);

  // Do whatever you want
  return NextResponse.json({ message: domainExists }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request, response) {
  // Do whatever you want

  try {
    const body = await request.json();
    console.log(body);
    const { email } = body;
    console.log(email);
    // const email = "Suray@gmail.com";

    const domain = email.split("@")[1];

    const domainExists = await pingDomain(domain);
    console.log(domainExists);

    // Do whatever you want
    return NextResponse.json({ isValid: domainExists }, { status: 200 });
  } catch (error) {
    console.error("Error in API handler:", error);
    return NextResponse.json({ message: domainExists }, { status: 500 });
  }
}
