export type PartialRecord<K extends keyof any, T> = Partial<Record<K, T>>

export type PartialBy<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>

export type StringRecord<T = any> = Record<string, T>

export type ExtendWith<K, F extends { [k in keyof K]?: any }, S extends keyof K = never> = Omit<K, keyof F | S> & F

export type Tuple<T1, T2 = T1> = [T1, T2]
export type Tuple3<T1, T2 = T1, T3 = T1> = [T1, T2, T3]

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];
