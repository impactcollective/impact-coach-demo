export const queryNames = {
  therapists: "therapists",
  accounts_session_regulation: "accounts_session_regulation",
  check_complimentary: "check_complimentary",
} as const;

type QueryNames = typeof queryNames;

export type QueryKeys = `${keyof QueryNames}` | keyof QueryNames;
