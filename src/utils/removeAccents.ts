export default function removeAccents(word: string) {
  return word.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
