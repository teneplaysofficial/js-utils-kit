import { describe, expect, it } from 'vitest';
import { HTML_TAG_REGEX, STRICT_HTML_TAG_REGEX } from '../src';

describe('HTML_TAG_REGEX', () => {
  it('matches opening tags', () => {
    expect('<div>'.match(HTML_TAG_REGEX)).toEqual(['<div>']);
  });

  it('matches closing tags', () => {
    expect('</div>'.match(HTML_TAG_REGEX)).toEqual(['</div>']);
  });

  it('matches self-closing tags', () => {
    expect('<img src="a.png" />'.match(HTML_TAG_REGEX)).toEqual(['<img src="a.png" />']);
  });

  it('matches nested tags', () => {
    expect('<div><span>Hello</span></div>'.match(HTML_TAG_REGEX)).toEqual([
      '<div>',
      '<span>',
      '</span>',
      '</div>',
    ]);
  });

  it('does not match plain text', () => {
    expect('Hello, world!'.match(HTML_TAG_REGEX)).toBeNull();
  });

  it('matches malformed tags', () => {
    expect('<>'.match(HTML_TAG_REGEX)).toEqual(['<>']);
    expect('</>'.match(HTML_TAG_REGEX)).toEqual(['</>']);
  });
});

describe('STRICT_HTML_TAG_REGEX', () => {
  it('matches opening tags', () => {
    expect('<div>'.match(STRICT_HTML_TAG_REGEX)).toEqual(['<div>']);
  });

  it('matches closing tags', () => {
    expect('</div>'.match(STRICT_HTML_TAG_REGEX)).toEqual(['</div>']);
  });

  it('matches self-closing tags', () => {
    expect('<img src="a.png" />'.match(STRICT_HTML_TAG_REGEX)).toEqual(['<img src="a.png" />']);
  });

  it('matches uppercase tag names', () => {
    expect('<DIV>'.match(STRICT_HTML_TAG_REGEX)).toEqual(['<DIV>']);
  });

  it('does not match React fragments', () => {
    expect('<>'.match(STRICT_HTML_TAG_REGEX)).toBeNull();
    expect('</>'.match(STRICT_HTML_TAG_REGEX)).toBeNull();
  });

  it('does not match plain text', () => {
    expect('Hello'.match(STRICT_HTML_TAG_REGEX)).toBeNull();
  });

  it('matches nested tags', () => {
    expect('<div><span>Hello</span></div>'.match(STRICT_HTML_TAG_REGEX)).toEqual([
      '<div>',
      '<span>',
      '</span>',
      '</div>',
    ]);
  });
});
