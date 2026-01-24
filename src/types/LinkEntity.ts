export type LinkEntity<E extends object = {}> = {
  title: string;
  href: string;
} & E;