import { getRandomWordAction } from "@/actions/random-word";

export async function GET() {
  const word = await getRandomWordAction();

  return Response.json({ word });
}
