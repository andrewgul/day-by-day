// lib/result.ts
import type { ResultUnion } from '@/types/ResultUnion'; // или где у тебя лежит тип

// 1. Фабрики (constructors) — самый популярный и читаемый способ
export function success<D>(data: D): ResultUnion<D> {
  return { success: true, data };
}

export function failure<E = unknown>(error: E): ResultUnion<never, E> {
  return { success: false, error };
}

// 2. Тип-хелперы для извлечения частей (очень удобно в компонентах и функциях)
export type Success<T> = Extract<ResultUnion<T>, { success: true }>;
export type Failure<T> = Extract<ResultUnion<unknown, T>, { success: false }>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DataOf<R extends ResultUnion<any>> = R extends { success: true }
  ? R['data']
  : never;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ErrorOf<R extends ResultUnion<any>> = R extends { success: false }
  ? R['error']
  : never;

// 3. Проверка + узкое типирование (type guard)
export function isSuccess<D, E>(
  result: ResultUnion<D, E>
): result is { success: true; data: D } {
  return result.success === true;
}

export function isFailure<D, E>(
  result: ResultUnion<D, E>
): result is { success: false; error: E } {
  return result.success === false;
}

// 4. Очень полезный вариант — unwrap / expect (как в Rust / Go)
export function unwrap<D, E>(result: ResultUnion<D, E>): D {
  if (result.success) return result.data;
  throw new Error(
    `Tried to unwrap error result: ${
      typeof result.error === 'string'
        ? result.error
        : JSON.stringify(result.error)
    }`
  );
}

// 5. Опционально: вариант с default значением
export function unwrapOr<D, E>(result: ResultUnion<D, E>, defaultValue: D): D {
  return result.success ? result.data : defaultValue;
}
