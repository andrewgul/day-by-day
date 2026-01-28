import { Webhook } from 'svix';
import { headers } from 'next/headers';
import * as schema from '@/db/schema';
import { eq } from 'drizzle-orm';
import { db } from '@/db';

const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

export async function POST(req: Request) {
  const headerPayload = await headers();
  const svixId = headerPayload.get('svix-id');
  const svixTimestamp = headerPayload.get('svix-timestamp');
  const svixSignature = headerPayload.get('svix-signature');

  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response('Error occured — no svix headers', { status: 400 });
  }

  const payload = await req.text();

  const wh = new Webhook(WEBHOOK_SECRET!);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let evt: any;

  try {
    evt = wh.verify(payload, {
      'svix-id': svixId,
      'svix-timestamp': svixTimestamp,
      'svix-signature': svixSignature,
    });
  } catch (err) {
    return new Response('Error verifying webhook', { status: 400 });
  }

  const eventType = evt.type;

  switch (eventType) {
    case 'user.created':
    case 'user.updated': {
      const { id } = evt.data;

      await db
        .insert(schema.users)
        .values({
          clerkId: id,
        })
        .onConflictDoNothing();

      break;
    }

    case 'user.deleted': {
      const { id } = evt.data;
      await db.delete(schema.users).where(eq(schema.users.clerkId, id));
      // можно также каскадно удалить активности, записи трекинга и т.д.
      break;
    }

    default:
      console.log(`Unhandled event type: ${eventType}`);
  }

  return new Response('Webhook processed', { status: 200 });
}
