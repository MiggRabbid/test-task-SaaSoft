export interface Label {
  text: string;
}

export enum TypeRecord {
  'LDAP' = 'LDAP',
  'LOCAL' = 'Локальная',
}

export interface Account {
  id: string;
  labels: Label[];
  type: TypeRecord;
  login: string;
  password: string | null;
  errors: {
    login?: string;
    password?: string;
  };
}
