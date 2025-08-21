/**
 * Represents an hour value in a 24-hour format.
 *
 * @remarks
 * - Valid range is `0–23`.
 * - Used in {@link getMilliseconds}.
 */
export type Hour =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23;

/**
 * Represents a minute or second value in time.
 *
 * @remarks
 * - Valid range is `0–59`.
 * - Used in {@link getMilliseconds}.
 */
export type MinuteOrSecond =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50
  | 51
  | 52
  | 53
  | 54
  | 55
  | 56
  | 57
  | 58
  | 59;

/**
 * Converts a time duration (days, hours, minutes, seconds) into total milliseconds.
 *
 * @returns The equivalent duration in milliseconds.
 *
 * @throws Will throw an error if any parameter is negative.
 *
 * @example
 * ```ts
 * getMilliseconds(1);             // 86400000 (1 day)
 * getMilliseconds(0, 1);          // 3600000  (1 hour)
 * getMilliseconds(0, 0, 30, 15);  // 1815000  (30 minutes 15 seconds)
 * ```
 */
export function getMilliseconds(
  /** Number of days. */
  days: number = 0,
  /** Hour of the day (`0–23`). */
  hours: Hour = 0,
  /** Minute value (`0–59`). */
  minutes: MinuteOrSecond = 0,
  /** Second value (`0–59`). */
  seconds: MinuteOrSecond = 0,
): number {
  const values = [days, hours, minutes, seconds];
  if (values.some((v) => v < 0)) throw new Error('All time values must be non-negative numbers.');

  return (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds) * 1000;
}
