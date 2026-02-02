import * as React from 'react';
import { Input } from '../ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import EmojiPicker, { type EmojiClickData } from 'emoji-picker-react';
import { Button } from '../ui/button';
import { useTranslations } from 'next-intl';
import { useToggle } from '@/lib/hooks/useToggle';

type Props = {
  disabled?: boolean;
  onChange?: (value: string) => void;
} & React.ComponentProps<'input'>;

const EmojiInput: React.FC<Props> = React.forwardRef(
  ({ disabled, onChange, ...inputProps }, ref) => {
    const t = useTranslations('EmojiInputComponent');

    const { isOpen, setIsOpen, handleClose } = useToggle();

    const handleEmojiClick = React.useCallback(
      (emojiData: EmojiClickData) => {
        onChange?.(emojiData.emoji);
      },
      [onChange]
    );

    React.useEffect(handleClose, [inputProps.value]);

    return (
      <div className="flex items-center gap-3">
        <Input type="hidden" readOnly ref={ref} {...inputProps} />
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button type="button" variant="outline" disabled={disabled}>
              {inputProps.value ? t('change') : t('select')}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <EmojiPicker
              onEmojiClick={handleEmojiClick}
              autoFocusSearch={false}
              width={320}
              height={400}
              previewConfig={{ showPreview: false }}
              skinTonesDisabled
            />
          </PopoverContent>
          {inputProps.value && <span>{inputProps.value}</span>}
        </Popover>
      </div>
    );
  }
);

EmojiInput.displayName = 'EmojiInput';

export default EmojiInput;
