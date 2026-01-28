import clsx from 'clsx';
import * as React from 'react';

type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

export const Paragraph = ({ className, ...props }: ParagraphProps) => {
  return (
    <p className={clsx("leading-7", className)} {...props} />
  )
}
