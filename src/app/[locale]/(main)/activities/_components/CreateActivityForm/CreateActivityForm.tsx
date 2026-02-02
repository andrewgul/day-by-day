'use client';

import * as React from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldGroup } from '@/components/ui/field';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { createActivity } from '@/server/actions/createActivity';
import { useTranslations } from 'next-intl';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  activityFormSchema,
  type ActivityFormValues,
} from '@/lib/schemas/activityForm';
import EmojiInput from '@/components/form/EmojiInput';
import { createFormData } from '@/lib/createFormData';
import { useToggle } from '@/lib/hooks/useToggle';

export const CreateActivityForm = () => {
  const t = useTranslations('CreateActivityFormComponent');

  const { isOpen, setIsOpen, handleClose } = useToggle(false);

  const form = useForm<ActivityFormValues>({
    resolver: zodResolver(activityFormSchema),
    defaultValues: {
      title: '',
      emoji: '',
      description: '',
    },
  });

  const handleSubmit = React.useCallback(
    async (data: ActivityFormValues) => {
      const result = await createActivity(createFormData(data));

      if (result?.success) {
        handleClose();
      }
    },
    [handleClose]
  );

  const handleOpenChange = React.useCallback(
    (open: boolean) => {
      if (!open) {
        form.reset();
      }

      setIsOpen(open);
    },
    [setIsOpen, form]
  );

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">{t('addActivity')}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-4"
        >
          <DialogHeader>
            <DialogTitle>{t('newActivity')}</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Controller
              name="emoji"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <div className="grid gap-2">
                    <Label>Emoji</Label>
                    <EmojiInput
                      id="emoji"
                      aria-invalid={fieldState.invalid}
                      {...field}
                    />
                  </div>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <Label htmlFor="title">{t('title')}</Label>
                  <Input
                    id="title"
                    aria-invalid={fieldState.invalid}
                    {...field}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <Label htmlFor="description">{t('description')}</Label>
                  <Textarea
                    id="description"
                    aria-invalid={fieldState.invalid}
                    {...field}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">{t('cancel')}</Button>
            </DialogClose>
            <Button type="submit">{t('add')}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
