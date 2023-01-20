export const LINKEDIN_OAUTH2_STATE = 'linkedin_oauth2_state';
import { StringArray } from './types';

export function parse(search: string) {
  const query = search.substring(1);
  const vars = query.split('&');
  const parsed: StringArray = {};
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (pair.length > 1) {
      parsed[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
  }
  return parsed;
}
