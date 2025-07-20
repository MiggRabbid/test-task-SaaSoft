import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

import { TypeRecord } from '../types';
import type { Account } from '../types';

export const useAccountsStore = defineStore('accounts', {
  state: () => ({
    list: [] as Account[],
  }),
  actions: {
    load() {
      const raw = localStorage.getItem('accounts');
      if (raw) this.list = JSON.parse(raw);
    },
    save() {
      localStorage.setItem('accounts', JSON.stringify(this.list));
    },
    add() {
      this.list.push({
        id: uuidv4(),
        labels: [],
        type: TypeRecord.LOCAL,
        login: '',
        password: '',
        errors: {},
      });
      this.save();
    },
    remove(id: string) {
      console.log('remove', id);
      this.list = this.list.filter((a) => a.id !== id);
      this.save();
    },
    update(account: Account) {
      const idx = this.list.findIndex((a) => a.id === account.id);
      if (idx !== -1) this.list[idx] = account;
      this.save();
    },
  },
});
