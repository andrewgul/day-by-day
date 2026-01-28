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
} satisfies Record<string, { getPath: (...args: any[]) => string }>