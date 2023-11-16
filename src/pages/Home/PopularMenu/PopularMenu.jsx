import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";

const PopularMenu = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <SectionTitle subHeading="From Our Menu" heading="Popular Items" />
        <MenuCategory category="popular" btnText="View Full Menu" />
      </div>
    </section>
  );
};

export default PopularMenu;
