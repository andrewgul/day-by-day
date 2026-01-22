import { Button } from "@/components/ui/button"
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations('test');

  return (
    <>
      <div>Hello!</div>
      <Button>yo</Button>
      <div>{t('test')}</div>
    </>
  );
}
