import _uniqueId from "lodash/uniqueId";

export const LOGO_URL =
  "https://media-exp1.licdn.com/dms/image/C4E0BAQF8HFJCecgFhA/company-logo_200_200/0/1632412292093?e=1662595200&v=beta&t=5GZc72Pz2NLoTFNKMzd7Fz_THHhbrUPmzgnJltPbvjk";

export const GITHUB_LINK =
  "https://github.com/mosssiiiiiii/instapro-coding-challenge";

export const initialValue = [
  { name: "Todo", id: _uniqueId("clm-"), cards: [] },
  { name: "Doing", id: _uniqueId("clm-"), cards: [] },
  { name: "Done", id: _uniqueId("clm-"), cards: [] },
];
