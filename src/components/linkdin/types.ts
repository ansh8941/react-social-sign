export interface useLinkedInType {
  redirectUri: string;
  clientId: string;
  onSuccess: (code: string) => void;
  onError?: ({ error, errorMessage }: { error: string; errorMessage: string }) => void;
  state?: string;
  scope?: string;
  closePopupMessage?: string;
}

interface linkedInLoginType {
  linkedInLogin: () => void;
}

export interface LinkedInType extends useLinkedInType {
  children: ({ linkedInLogin }: linkedInLoginType) => JSX.Element;
}

export interface StringArray {
  [index: string]: string;
}
