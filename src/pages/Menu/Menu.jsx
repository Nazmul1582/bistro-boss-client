import Head from "../Shared/Head/Head";
import PageCover from "../Shared/PageCover/PageCover";
import image from '../../assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <section>
            <Head pageTitle="Menu" />
            <PageCover img={image} title="Our Menu" />
        </section>
    );
};

export default Menu;