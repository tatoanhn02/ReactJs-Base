export function load(key: string, parse = true): unknown {
  try {
    const value = window.localStorage.getItem(key);
    return value && parse ? JSON.parse(value) : value;
  } catch (e) {
    console.error("Error in storage.load", e);
    return null;
  }
}

export function save(key: string, value: any): string | null {
  try {
    const savedValue = JSON.stringify(value);
    window.localStorage.setItem(key, savedValue);
    return savedValue;
  } catch (e) {
    console.error("Error in storage.save", e);
    return null;
  }
}
