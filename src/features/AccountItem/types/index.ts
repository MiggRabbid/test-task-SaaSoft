export interface ILabel {
  text: string;
}

export enum TypeRecord {
  'LDAP' = 'LDAP',
  'LOCAL' = 'Локальная',
}

export interface IAccount {
  id: string;
  labels: ILabel[];
  type: TypeRecord;
  login: string;
  password: string | null;
}

export interface IAccountListItem {
  id: string;
  labels: string;
  type: TypeRecord;
  login: string;
  password: string | null;
  errors: {
    login: boolean;
    password: boolean;
  };
}
