export const ROUTES = {
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