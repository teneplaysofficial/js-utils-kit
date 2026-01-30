export function deepFreeze<T>(obj: T): Readonly<T> {
  if (typeof obj !== 'object' || obj === null) return obj;

  Object.freeze(obj);

  for (const value of Object.values(obj)) {
    deepFreeze(value as object);
  }

  return obj;
}
