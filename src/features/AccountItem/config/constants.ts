import { TypeRecord } from '../types';

export const options = [
  { label: TypeRecord.LDAP, value: TypeRecord.LDAP },
  { label: TypeRecord.LOCAL, value: TypeRecord.LOCAL },
] as const satisfies ReadonlyArray<{
  label: TypeRecord;
  value: TypeRecord;
}>;
