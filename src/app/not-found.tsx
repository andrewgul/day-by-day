import { Container } from "@/components/layout/Container";
import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

/** @todo intl-messages */
export default async function NotFound() {
  const user = await currentUser();

  const { href, text }: { href: string; text: string } = user ? {
    href: ROUTES.dashboard.getPath(),
    text: 'To dashboard',
  } : {
    href: ROUTES.dashboard.getPath(),
    text: 'To main',
  }

  return (
    <Container centered fullscreen paddingX={null} paddingY={null}>
      <div className="flex flex-col items-center gap-6">
        <Image src='/logo-l.svg' alt='' width={576} height={134} />
        <Typography.H1 underline={false} centered>
          Not found :(
        </Typography.H1>
        <Link href={href}>
          <Button>
            {text}
          </Button>
        </Link>
      </div>
    </Container>
  );
}