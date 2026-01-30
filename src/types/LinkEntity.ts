export type LinkEntity<E extends object = object> = {
  title: string;
  href: string;
} & E;
