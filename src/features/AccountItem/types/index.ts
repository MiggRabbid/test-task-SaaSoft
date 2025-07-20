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
  errors: {
    login: boolean;
    password: boolean;
  };
}

export interface IAccountListItem extends Omit<IAccount, 'labels'> {
  labels: string;
}
