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
  it('should return the length of the longest word', () => {
    expect(longestWordLength('js utils kit')).toBe(5);
  });

  it('should handle multiple spaces', () => {
    expect(longestWordLength('short   longerword   mid')).toBe(10);
  });

  it('should handle single word', () => {
    expect(longestWordLength('hello')).toBe(5);
  });

  it('should handle empty string', () => {
    expect(longestWordLength('')).toBe(0);
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

  it('handles punctuation as part of words', () => {
    expect(shortestWordLength('hi! wow?? ok')).toBe(2);
  });

  it('handles single-character words', () => {
    expect(shortestWordLength('a ab abc abcd')).toBe(1);
  });
});
