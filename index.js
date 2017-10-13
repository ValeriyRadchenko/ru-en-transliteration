const rus = [
  'а', 'А', 'б', 'Б', 'в', 'В', 'г', 'Г', 'д', 'Д', 'е', 'Е', 'ё', 'Ё', 'ж', 'Ж', 'з', 'З', 'и', 'И', 'й', 'Й',
  'к', 'К', 'л', 'Л', 'м', 'М', 'н', 'Н', 'о', 'О', 'п', 'П', 'р', 'Р', 'с', 'С', 'т', 'Т', 'у', 'У', 'ф', 'Ф',
  'х', 'Х', 'ц', 'Ц', 'ч', 'Ч', 'ш', 'Ш', 'щ', 'Щ', 'ъ', 'Ъ', 'ы', 'Ы', 'ь', 'Ь', 'э', 'Э', 'ю', 'Ю', 'я', 'Я'
];

const eng = [
  'a', 'A', 'b', 'B', 'v', 'V', 'g', 'G', 'd', 'D', 'ye', 'Ye', 'yo', 'Yo', 'zh', 'Zh', 'z', 'Z', 'i', 'I', 'y', 'Y',
  'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'f', 'F',
  'kh', 'Kh', 'ts', 'Ts', 'ch', 'Ch', 'sh', 'Sh', 'shch', 'Shch', '\'\'', '\'\'', 'y', 'Y', '\'', '\'', 'e', 'E',
  'yu', 'Yu', 'ya', 'Ya'
];

function fromRuToEn(string) {
  if (string === null || string === undefined) {
    return string;
  }

  if (typeof string !== 'string') {
    throw new TypeError('Unmatched type: please use a string.');
  }

  return string
    .split('')
    .map(character => {
      if (character.charCodeAt(0) > 127) {
        return eng[ rus.indexOf(character) ] || '';
      }

      return character
    })
    .join('');
}

module.exports = {
  fromRuToEn
};
