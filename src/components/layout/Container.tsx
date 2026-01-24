import clsx from "clsx";

export type ContainerProps = React.PropsWithChildren<{
  className?: string;
  title?: React.ReactNode;
}>;

export const Container = ({ className, children, title }: ContainerProps) => {
  return (
    <div className={clsx('px-4 py-3 w-full', className)}>
      {title && <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 w-full">{title}</h1>}
      {children}
    </div>
  );
};