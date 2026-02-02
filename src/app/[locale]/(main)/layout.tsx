import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { MainSidebar } from './_components/MainSidebar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function MainLayout({
  children,
}: React.PropsWithChildren) {
  const tImages = await getTranslations('Images');

  return (
    <SidebarProvider>
      <MainSidebar />
      <main className="w-full">
        <header className="bg-background sticky top-0 flex items-center justify-between p-4">
          <Button size="icon-sm" variant="outline">
            <SidebarTrigger />
          </Button>
          <Image
            src="/logo-l.svg"
            alt={tImages('logo')}
            width={576 / 4}
            height={134 / 4}
          />
        </header>
        {children}
      </main>
    </SidebarProvider>
  );
}
