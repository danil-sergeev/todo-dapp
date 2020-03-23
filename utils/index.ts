import {Task} from '../types';

const keys = ['caption', 'description', 'owner', 'status', 'number'];

export const formatSolidityResponse = (v: string[]): Task => {
  return v.reduce((res: any, field, idx) => {
    res[keys[idx]] = isNaN(parseInt(field)) ? field : parseInt(field);
    return res;
  }, {});
};
