import z from 'zod';

const MAX_TITLE_LENGTH = 80;

const MAX_EMOJI_LENGTH = 8;

const MAX_DESCRIPTION_LENGTH = 500;

/** @todo intl-messages */
export const activityFormSchema = z.object({
  title: z
    .string()
    .min(1, 'Название обязательно')
    .max(MAX_TITLE_LENGTH, `Максимум ${MAX_TITLE_LENGTH} символов`),
  emoji: z.string().min(1, 'Поле обязательное').max(MAX_EMOJI_LENGTH),
  description: z
    .string()
    .max(MAX_DESCRIPTION_LENGTH, `Максимум ${MAX_DESCRIPTION_LENGTH} символов`)
    .optional(),
});

export type ActivityFormValues = z.infer<typeof activityFormSchema>;
