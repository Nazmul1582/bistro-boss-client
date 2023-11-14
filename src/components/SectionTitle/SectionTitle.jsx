const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="max-w-max mx-auto text-center">
            <h4 className="text-xl font-semibold text-amber-400 mb-4">---{subHeading}---</h4>
            <h2 className="text-5xl font-bold border-y-4 py-5 mb-10 uppercase">{heading}</h2>
        </div>
    );
};

export default SectionTitle;