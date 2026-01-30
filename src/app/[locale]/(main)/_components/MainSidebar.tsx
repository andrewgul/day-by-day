import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { ROUTES } from '@/config/routes';
import { Link } from '@/i18n/navigation';
import { LinkEntity } from '@/types/LinkEntity';
import { CalendarHeart, User, Settings, Bike, CircleGauge } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

const getLinks = async (): Promise<
  Record<
    'primary' | 'secondary',
    LinkEntity<{ icon: React.ComponentType<{ className?: string }> }>[]
  >
> => {
  const t = await getTranslations('SidebarComponent');

  return {
    primary: [
      {
        title: t('dashboard'),
        href: ROUTES.dashboard.getPath(),
        icon: CircleGauge,
      },
      {
        title: t('calendar'),
        href: ROUTES.calendar.getPath(),
        icon: CalendarHeart,
      },
      {
        title: t('activities'),
        href: ROUTES.activities.getPath(),
        icon: Bike,
      },
    ],
    secondary: [
      {
        title: t('profile'),
        href: ROUTES.profile.getPath(),
        icon: User,
      },
      {
        title: t('settings'),
        href: ROUTES.settings.getPath(),
        icon: Settings,
      },
    ],
  };
};

export async function MainSidebar() {
  const links = await getLinks();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            {links.primary.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.href}>
                    <item.icon className="h-2.5 w-2.5" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            {links.secondary.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.href}>
                    <item.icon className="h-2.5 w-2.5" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
