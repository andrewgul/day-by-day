import clsx from 'clsx';
import * as React from 'react';

type H1Props = React.HTMLAttributes<HTMLHeadingElement> & {
  underline?: boolean;
  centered?: boolean;
};

export const H1 = ({
  className,
  underline = true,
  centered,
  ...props
}: H1Props) => {
  return (
    <h1
      className={clsx(
        'w-full scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0',
        underline && 'border-b pb-2',
        centered && 'text-center',
        className
      )}
      {...props}
    />
  );
};

export default H1;
