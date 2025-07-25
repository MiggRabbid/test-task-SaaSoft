import { ref } from 'vue';

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const data = ref<T>(defaultValue);

  function load() {
    try {
      const raw = localStorage.getItem(key);
      data.value = raw ? JSON.parse(raw) : defaultValue;
    } catch (e) {
      console.error(e);
      data.value = defaultValue;
    }
  }

  function save() {
    try {
      localStorage.setItem(key, JSON.stringify(data.value));
    } catch (e) {
      console.error(e);
    }
  }

  return { data, load, save };
};
