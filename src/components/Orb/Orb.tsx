export const Orb = ({ tech }: { tech: string }) => {
    return (
        <p className="orb w-full bg-lightpurple aspect-[1] object-cover rounded-full">
            {tech}
        </p>
    );
};
