import { lowerCase } from 'lower-case';
import { upperCase } from 'upper-case';
import { capitalCase } from 'capital-case';
import { sentenceCase } from 'sentence-case';
import { spongeCase } from 'sponge-case';

export const switchCasing = (text, casing) => {
  if (text === '') return '';
  switch (casing) {
    case 'lowercase':
      return lowerCase(text);
    case 'uppercase':
      return upperCase(text);
    case 'capitalized':
      return capitalCase(text);
    case 'sentence':
      return sentenceCase(text);
    case 'random':
      return spongeCase(text);
    default: // original
      return text;
  }
}
