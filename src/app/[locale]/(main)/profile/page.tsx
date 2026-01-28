import { Container } from "@/components/layout/Container";
import { UserButton, UserProfile } from "@clerk/nextjs";

export default async function ProfilePage() {
  return (
    <Container>
      <UserButton />
    </Container>
  );
}