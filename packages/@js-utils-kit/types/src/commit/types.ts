/**
 * Metadata describing a supported commit type.
 *
 * @see {@link COMMIT_TYPES}.
 */
export interface CommitTypeMeta {
  /**
   * Conventional commit type identifier
   *
   * @example
   * - feat
   * - fix
   * - chore
   * - BREAKING CHANGE.
   */
  type: string;

  /**
   * Human-readable description of what this commit type represents.
   */
  description: string;

  /**
   * Whether this commit type is allowed to introduce a breaking change.
   *
   * When true, breaking changes may be expressed using:
   * - `!` after the type (e.g. `feat!:`)
   * - `BREAKING CHANGE:` footer
   */
  allowsBreakingChange: boolean;

  /**
   * Whether commits of this type should be considered release-relevant (e.g. included in changelogs).
   */
  isReleaseRelevant?: boolean;

  /**
   * Default semantic version impact when no breaking change is present.
   */
  defaultReleaseType?: 'major' | 'minor' | 'patch' | 'none';

  /**
   * Display-friendly label for UIs or documentation.
   */
  title?: string;

  /**
   * Emoji or icon representing this commit type.
   */
  icon?: string;

  /**
   * Marks this commit type as deprecated.
   */
  deprecated?: boolean;
}
