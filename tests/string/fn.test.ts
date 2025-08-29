import {
  splitString,
  countChars,
  countWords,
  countSubstring,
  countFrequencies,
  countLines,
  uniqueChars,
  longestWordLength,
  shortestWordLength,
  shortestWord,
  longestWord,
} from '../../src/string/fn';

describe('splitString', () => {
  it('should split by whitespace', () => {
    expect(splitString('a b  c')).toEqual(['a', 'b', 'c']);
  });

  it('should split by custom string delimiter', () => {
    expect(splitString('a,b,c', ',')).toEqual(['a', 'b', 'c']);
  });

  it('should split by regex delimiter', () => {
    expect(splitString('a1b2c3', /\d/)).toEqual(['a', 'b', 'c', '']);
  });
});

describe('countChars', () => {
  it('should count total characters', () => {
    expect(countChars('js-utils-kit')).toBe(1);
    expect(countChars('js utils kit')).toBe(3);
  });

  it('should count occurrences of a specific character', () => {
    expect(countChars('banana', 'a')).toBe(3);
    expect(countChars('banana', 'n')).toBe(2);
    expect(countChars('banana', 'z')).toBe(0);
  });
});

describe('countWords', () => {
  it('should count words separated by spaces', () => {
    expect(countWords('js utils kit')).toBe(3);
  });

  it('should ignore multiple spaces', () => {
    expect(countWords('js    utils         kit')).toBe(3);
  });

  it('should handle leading/trailing spaces', () => {
    expect(countWords('   js utils kit   ')).toBe(3);
  });
});

describe('countSubstring', () => {
  it('should count occurrences of a substring', () => {
    expect(countSubstring('lololol', 'lo')).toBe(3);
  });

  it('should return 0 if substring not found', () => {
    expect(countSubstring('hello', 'xyz')).toBe(0);
  });

  it('should handle repeated single character substrings', () => {
    expect(countSubstring('aaaaa', 'a')).toBe(5);
  });
});

describe('countFrequencies', () => {
  it('should count character frequencies', () => {
    expect(countFrequencies('banana')).toEqual({ b: 1, a: 3, n: 2 });
  });

  it('should return empty object for empty string', () => {
    expect(countFrequencies('')).toEqual({});
  });
});

describe('countLines', () => {
  it('should count lines separated by \\n', () => {
    expect(countLines('a\nb\nc')).toBe(3);
  });

  it('should count lines separated by \\r\\n', () => {
    expect(countLines('a\r\nb\r\nc')).toBe(3);
  });

  it('should count single line', () => {
    expect(countLines('hello')).toBe(1);
  });
});

describe('uniqueChars', () => {
  it('should return unique characters', () => {
    expect(uniqueChars('banana').sort()).toEqual(['a', 'b', 'n']);
  });

  it('should handle empty string', () => {
    expect(uniqueChars('')).toEqual([]);
  });
});

describe('longestWordLength', () => {
  it('returns the length of the longest word', () => {
    expect(longestWordLength('js utils kit')).toBe(5);
  });

  it('handles multiple spaces', () => {
    expect(longestWordLength('short   longerword   mid')).toBe(10);
  });

  it('handles single word', () => {
    expect(longestWordLength('hello')).toBe(5);
  });

  it('returns 0 for empty string', () => {
    expect(longestWordLength('')).toBe(0);
  });

  it('ignores punctuation when counting length', () => {
    expect(longestWordLength('hi!! wow?? amazing...')).toBe(7);
  });

  it('handles single-character words', () => {
    expect(longestWordLength('a ab abc abcd')).toBe(4);
  });

  it('handles tie between multiple longest words', () => {
    expect(longestWordLength('alpha beta')).toBe(5);
  });

  it('handles very long word', () => {
    const longWord = 'a'.repeat(50);
    expect(longestWordLength(`short ${longWord} tiny`)).toBe(50);
  });
});

describe('shortestWordLength', () => {
  it('returns 0 for an empty string', () => {
    expect(shortestWordLength('')).toBe(0);
    expect(shortestWordLength('   ')).toBe(0);
  });

  it('returns the length of the only word', () => {
    expect(shortestWordLength('hello')).toBe(5);
  });

  it('returns the length of the shortest word among multiple', () => {
    expect(shortestWordLength('js utils kit')).toBe(2);
    expect(shortestWordLength('one three five')).toBe(3);
  });

  it('ignores multiple spaces between words', () => {
    expect(shortestWordLength('a    bb   ccc')).toBe(1);
  });

  it('ignores punctuation when counting length', () => {
    expect(shortestWordLength('hi! wow?? ok')).toBe(2);
  });

  it('handles single-character words', () => {
    expect(shortestWordLength('a ab abc abcd')).toBe(1);
  });

  it('handles tie between multiple shortest words', () => {
    expect(shortestWordLength('dog cat')).toBe(3);
  });

  it('handles long words mixed with short ones', () => {
    const longWord = 'a'.repeat(50);
    expect(shortestWordLength(`short ${longWord} tiny`)).toBe(4);
  });
});

describe('longestWord', () => {
  it('returns the longest word when unique', () => {
    expect(longestWord('js utils kit')).toBe('utils');
  });

  it('handles multiple spaces', () => {
    expect(longestWord('short   longerword   mid')).toBe('longerword');
  });

  it('returns the only word', () => {
    expect(longestWord('hello')).toBe('hello');
  });

  it('returns empty string for empty input', () => {
    expect(longestWord('')).toBe('');
  });

  it('ignores symbols when determining length', () => {
    expect(longestWord('hi!! wow?? amazing...')).toBe('amazing');
  });

  it('returns array of words if multiple share longest length', () => {
    expect(longestWord('alpha delta gamma')).toEqual(['alpha', 'delta', 'gamma']);
  });

  it('returns a single word if all ties are the same', () => {
    expect(longestWord('alpha alpha')).toBe('alpha');
  });

  it('returns an array if multiple unique words share longest length', () => {
    expect(longestWord('alpha gamma')).toEqual(['alpha', 'gamma']);
  });
});

describe('shortestWord', () => {
  it('returns the shortest word when unique', () => {
    expect(shortestWord('js utils kit')).toBe('js');
  });

  it('handles multiple spaces', () => {
    expect(shortestWord('a    bb   ccc')).toBe('a');
  });

  it('returns the only word', () => {
    expect(shortestWord('hello')).toBe('hello');
  });

  it('returns empty string for empty input', () => {
    expect(shortestWord('')).toBe('');
  });

  it('ignores symbols when determining length', () => {
    expect(shortestWord('hi!! wow?? ok')).toEqual(['hi', 'ok']);
  });

  it('returns array of words if multiple share shortest length', () => {
    expect(shortestWord('dog cat')).toEqual(['dog', 'cat']);
  });

  it('returns array of three words if all same length', () => {
    expect(shortestWord('dog cat bat')).toEqual(['dog', 'cat', 'bat']);
  });

  it('returns a single word if all ties are the same', () => {
    expect(shortestWord('dog dog')).toBe('dog');
  });

  it('returns an array if multiple unique words share shortest length', () => {
    expect(shortestWord('dog cat')).toEqual(['dog', 'cat']);
  });
});
