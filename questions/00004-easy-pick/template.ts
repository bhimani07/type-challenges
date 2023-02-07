//https://stackoverflow.com/questions/49397567/how-to-remove-properties-via-mapped-type-in-typescript
type MyPick<T, K> = {
  [P in keyof T as P extends K ? P : never]: T[P]
}
