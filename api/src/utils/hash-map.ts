export function hashMap<T, R>(object: T, mapper: (key: keyof T, value: T[keyof T]) => R) {
  const newObject = {} as {[K in keyof T]: R};

  for (const key of Object.keys(object)) {
    newObject[key] = mapper(key as keyof T, object[key]);
  }

  return newObject;
}
