import { Hour, MinuteOrSecond } from '@js-utils-kit/types';

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
