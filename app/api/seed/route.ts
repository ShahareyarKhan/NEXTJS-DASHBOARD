// export async function GET(req: Request) {
//     return new Response(JSON.stringify({ message: "Seed route working!" }), {
//       status: 200,
//     });
//   }


//   .next\server\app\page\app-build-manifest.jso
export const runtime = "nodejs"; // Ensure it's using Node.js

import bcrypt from "bcrypt";

export async function GET(req: Request) {
    const hashedPassword = await bcrypt.hash("password", 10);
    return new Response(JSON.stringify({ hashedPassword }), { status: 200 });
}
