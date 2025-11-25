interface SectionTitleProps {
    title: string;
    subtitle?: string;
    center?: boolean;
}

export default function SectionTitle({ title, subtitle, center = false }: SectionTitleProps) {
    return (
        <div className={`mb-12 ${center ? "text-center" : "text-left"}`}>
            {subtitle && (
                <span className="text-secondary font-semibold uppercase tracking-wider text-sm mb-2 block">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
                {title}
            </h2>
            <div className={`h-1.5 w-20 bg-secondary mt-4 rounded-full ${center ? "mx-auto" : ""}`} />
        </div>
    );
}
