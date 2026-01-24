import { Container } from "@/components/layout/Container";
import { getTranslations } from "next-intl/server";

export default async function CalendarPage() {
  const t = await getTranslations('Calendar');

  return (
    <Container title={t('title')}>
      Under construction 🚧
    </Container>
  );
}