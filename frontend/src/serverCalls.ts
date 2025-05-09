import { CandidatesRequest, DomainAssessment } from "shared/types";

const SERVER_PATH = import.meta.env.VITE_SERVER_URL;

export const getDomainCandidates = async (
  userInput: CandidatesRequest
): Promise<string[]> => {
  const response = await fetch(`${SERVER_PATH}/domain-candidates`, {
    method: "POST",
    body: JSON.stringify({ userInput }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  return json.domains;
};

export const getDomainAssessment = async (
  domain: string
): Promise<DomainAssessment> => {
  const response = await fetch(`${SERVER_PATH}/domain-assessment`, {
    method: "POST",
    body: JSON.stringify({ domain }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  return json.domainAssessment;
};
