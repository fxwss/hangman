async function getDict() {
  const data = await fetch(
    "https://raw.githubusercontent.com/fserb/pt-br/refs/heads/master/data"
  );
  const text = await data.text();
  const dict = text.split("\n");
  const result: { word: string; tf: number }[] = [];

  for (const line of dict) {
    const [word, tf] = line.split(",");
    result.push({ word, tf: parseInt(tf) });
  }

  return result
    .sort((a, b) => b.tf - a.tf)
    .map((a) => a.word)
    .filter((word) => word.length > 4)
    .splice(0, 1000);
}

export const dict = getDict();

export async function getRandomWordAction() {
  return (await dict)[Math.floor(Math.random() * (await dict).length)];
}

export async function GET() {
  const word = await getRandomWordAction();

  return Response.json({ word });
}
