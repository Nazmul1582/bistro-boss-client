import Head from "../Shared/Head/Head";
import PageCover from "../Shared/PageCover/PageCover";
import image from '../../assets/menu/banner3.jpg'
import MenuCategory from "../Shared/MenuCategory/MenuCategory";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionCover from "../Shared/SectionCover/SectionCover";
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'

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

            {/* desserts */}
            <section>
                <SectionCover img={dessertImg} title="Desserts" />
                <div className="pt-20 pb-12">
                    <MenuCategory category="dessert" />
                </div>
            </section>

            {/* pizza */}
            <section>
                <SectionCover img={pizzaImg} title="Pizza" />
                <div className="pt-20 pb-12">
                    <MenuCategory category="pizza" />
                </div>
            </section>

            {/* salads */}
            <section>
                <SectionCover img={saladImg} title="Salads" />
                <div className="pt-20 pb-12">
                    <MenuCategory category="salad" />
                </div>
            </section>

            {/* soups */}
            <section>
                <SectionCover img={soupImg} title="Soups" />
                <div className="pt-20">
                    <MenuCategory category="soup" />
                </div>
            </section>
        </>
    );
};

export default Menu;