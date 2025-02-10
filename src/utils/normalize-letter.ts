export const normalizeLetter = (letter: string) =>
  letter.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
