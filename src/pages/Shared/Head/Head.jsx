import { Helmet } from "react-helmet-async";

const Head = ({pageTitle}) => {
    return (
        <Helmet>
            <title>Bistro Boss | {pageTitle}</title>
        </Helmet>
    );
};

export default Head;