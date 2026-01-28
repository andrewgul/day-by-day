import clsx from "clsx";

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
  paddingY = 4,
  fullscreen,
}: ContainerProps) => {
  return (
    <div
      className={clsx(
        "w-full",
        paddingX && `px-${paddingX}`,
        paddingY && `py-3`,
        centered && "flex items-center justify-center",
        fullscreen && "w-screen h-screen",
        className,
      )}
    >
      {title && (
        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 w-full">
          {title}
        </h1>
      )}
      {children}
    </div>
  );
};
