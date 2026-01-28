import { Container } from "@/components/layout/Container";
import { Typography } from "@/components/typography";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/config/routes";

export default async function WelcomePage() {
  const tImages = await getTranslations('Images');
  const tWelcomePage = await getTranslations('WelcomePage');

  return (
    <Container centered fullscreen paddingX={null} paddingY={null}>
      <div className="flex flex-col items-center gap-4">
        <Image src='/logo-l.svg' alt={tImages('logo')} width={576} height={134} />
        <Typography.Paragraph className="font-medium">
          {tWelcomePage('description')}
        </Typography.Paragraph>
        <SignedIn>
          <Link href={ROUTES.calendar.getPath()}>
            <Button>
              {tWelcomePage('continue')}
            </Button>
          </Link>
        </SignedIn>
        <SignedOut>
          <div className="flex items-center gap-2">
            <SignInButton>
              <Button variant='secondary'>
                {tWelcomePage('signIn')}
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button>
                {tWelcomePage('signUp')}
              </Button>
            </SignUpButton>
          </div>
        </SignedOut>
      </div>
    </Container>
  )
}