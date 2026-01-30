export const ROUTES = {
  welcome: {
    getPath: () => '/welcome',
  },
  dashboard: {
    getPath: () => '/dashboard',
  },
  calendar: {
    getPath: () => '/calendar',
  },
  profile: {
    getPath: () => '/profile',
  },
  settings: {
    getPath: () => '/settings',
  },
  activities: {
    getPath: () => '/activities',
  },
} satisfies Record<
  string,
  {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getPath: (...args: any[]) => string;
  }
>;
