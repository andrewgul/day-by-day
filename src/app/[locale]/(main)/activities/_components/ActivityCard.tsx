import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ActivitySelectModel } from '@/db/schema/activities';
import { Pencil, Trash2Icon } from 'lucide-react';

export const ActivityCard = ({ model }: { model: ActivitySelectModel }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {model.emoji} {model.title}
        </CardTitle>
        {model.description && (
          <CardDescription>{model.description}</CardDescription>
        )}
      </CardHeader>
      <CardFooter>
        <div className="flex gap-2">
          <Button type="submit" variant="outline" size="icon-sm">
            <Pencil />
          </Button>
          <Button variant="destructive" size="icon-sm">
            <Trash2Icon />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
