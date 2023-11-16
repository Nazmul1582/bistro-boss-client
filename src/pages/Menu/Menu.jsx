import Head from "../Shared/Head/Head";
import PageCover from "../Shared/PageCover/PageCover";
import image from '../../assets/menu/banner3.jpg'
import MenuCategory from "../Shared/MenuCategory/MenuCategory";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Menu = () => {
    return (
        <>
            <Head pageTitle="Menu" />
            <PageCover img={image} title="Our Menu" />
            
            {/* today's offer */}
            <section className="pt-20 pb-12">
                <SectionTitle subHeading="Don't Miss" heading="TODAY'S OFFER" />
                <MenuCategory category="popular" />
            </section>

        </>
    );
};

export default Menu;