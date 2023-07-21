import clsx from "clsx";

export const Section = ({
    id,
    children,
    className,
}: {
    id?: string;
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <section
            id={id}
            className={clsx("min-h-screen w-screen py-12", className)}
        >
            {children}
        </section>
    );
};
