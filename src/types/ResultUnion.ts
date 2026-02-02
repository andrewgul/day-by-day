export type ResultUnion<D, E = unknown> =
  | {
      success: true;
      data: D;
    }
  | {
      success: false;
      error: E;
    };
