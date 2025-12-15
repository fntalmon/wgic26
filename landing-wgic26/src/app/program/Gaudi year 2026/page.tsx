import PageHeader from "@/components/PageHeader";

const Gaudi = () => {
    return (
        <div>
            <PageHeader
                title="Gaudi Year 2026"
                description="Description here"
                section="program"
            />
            <section className="w-full justify-start text-xs">
                This is the rest of the page
            </section>
        </div>
    );
};

export default Gaudi;