/** Represents the `replacer` argument accepted by {@link JSON.stringify} */
export type JsonReplacer =
  | ((this: unknown, key: string, value: unknown) => unknown)
  | readonly (string | number)[]
  | null;
