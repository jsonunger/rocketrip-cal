import {startCase, toLower} from 'lodash';

export function titleCase(str) {
  return startCase(toLower(str));
}
