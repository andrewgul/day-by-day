import { Container } from "@/components/layout/Container";
import { getTranslations } from "next-intl/server";

export default async function ProfilePage() {
  const t = await getTranslations('Profile');

    return (
      <Container title={t('title')}>
        Under construction 🚧
      </Container>
    );
}