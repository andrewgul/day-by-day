import clsx from 'clsx';

export type ContainerProps = React.PropsWithChildren<{
  className?: string;
  title?: React.ReactNode;
  centered?: boolean;
  paddingX?: number | null;
  paddingY?: number | null;
  fullscreen?: boolean;
}>;

export const Container = ({
  className,
  children,
  title,
  centered,
  paddingX = 4,
  paddingY = 3,
  fullscreen,
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
      {title && (
        <h1 className="w-full scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          {title}
        </h1>
      )}
      {children}
    </div>
  );
};
