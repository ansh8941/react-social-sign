export interface AppleLoginProps {
  clientId: string;
  redirectURI: string;
  autoLoad?: boolean;
  scope?: string;
  state?: string;
  responseType?: string | 'code' | 'id_token';
  responseMode?: string | 'query' | 'fragment' | 'form_post';
  nonce?: string;
  usePopup?: boolean;
  designProp?: {
    height?: number;
    width?: number;
    color?: string | 'white' | 'black';
    border?: boolean;
    type?: string | 'sign-in' | 'continue';
    border_radius?: number;
    scale?: number;
    locale?: string;
  };
  callback?: (d: any) => void;
  render?: (props: { onClick: (e?: any) => void; disabled?: boolean }) => JSX.Element;
}

export type ParamsType = {
  code?: string;
};
