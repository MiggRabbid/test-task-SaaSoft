import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

import { useLocalStorage } from '@/hooks/useLocalStorage';

import { TypeRecord } from '../types';
import type { IAccount } from '../types';

export const useAccountsStore = defineStore('accounts', () => {
  const { data: list, load, save } = useLocalStorage<IAccount[]>('accounts', []);

  load();

  function add() {
    list.value.push({
      id: uuidv4(),
      labels: [],
      type: TypeRecord.LOCAL,
      login: '',
      password: '',
    });
    save();
  }

  function remove(id: string) {
    const idx = list.value.findIndex((a) => a.id === id);
    if (idx !== -1) {
      list.value.splice(idx, 1);
      save();
    }
  }

  function update(item: IAccount) {
    const idx = list.value.findIndex((a) => a.id === item.id);
    if (idx !== -1) {
      list.value[idx] = item;
      save();
    }
  }

  return { list, add, remove, update };
});
