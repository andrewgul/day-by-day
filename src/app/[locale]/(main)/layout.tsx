import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { MainSidebar } from './_components/MainSidebar';

export default function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <SidebarProvider>
      <MainSidebar />
      <main className="w-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
