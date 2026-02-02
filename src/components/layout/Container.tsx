import clsx from 'clsx';

export type ContainerProps = React.PropsWithChildren<{
  className?: string;
  title?: React.ReactNode;
  centered?: boolean;
  paddingX?: number | null;
  paddingY?: number | null;
  fullscreen?: boolean;
  after?: React.ReactNode;
}>;

export const Container = ({
  className,
  children,
  title,
  centered,
  paddingX = 4,
  paddingY = 6,
  fullscreen,
  after,
}: ContainerProps) => {
  return (
    <div
      className={clsx(
        'w-full',
        paddingX && `px-${paddingX}`,
        paddingY && `py-${paddingY}`,
        centered && 'flex items-center justify-center',
        fullscreen && 'h-screen w-screen',
        className
      )}
    >
      <div className="flex items-center justify-between border-b pb-2">
        {title && (
          <h1 className="w-full scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
            {title}
          </h1>
        )}
        {after}
      </div>
      {children}
    </div>
  );
};
