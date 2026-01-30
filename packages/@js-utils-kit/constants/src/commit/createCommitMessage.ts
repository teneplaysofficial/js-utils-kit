// import { COMMIT_TYPES } from "../constants/commit-types";
// import type { CommitType } from "../constants/commit-types";
// import type { CommitScope } from "../constants/commit-scopes";
export const HI = '';
// export interface CreateCommitMessageOptions {
//   type: CommitType;
//   scopes?: CommitScope | CommitScope[];
//   subject: string;
//   breaking?: boolean;
// }

// export function createCommitMessage({
//   type,
//   scopes,
//   subject,
//   breaking = false
// }: CreateCommitMessageOptions): string {
//   if (breaking && !COMMIT_TYPES[type].allowBreaking) {
//     throw new Error(
//       `Commit type "${type}" does not allow breaking changes`
//     );
//   }

//   const scopeList = Array.isArray(scopes)
//     ? scopes
//     : scopes
//     ? [scopes]
//     : [];

//   const uniqueScopes = [...new Set(scopeList)];
//   const scopePart =
//     uniqueScopes.length > 0 ? `(${uniqueScopes.join(",")})` : "";

//   return `${type}${scopePart}${breaking ? "!" : ""}: ${subject}`;
// }
