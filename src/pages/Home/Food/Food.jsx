import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";

const Food = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <section>
      <div className="container mx-auto py-20">
        <SectionTitle subHeading="Should try" heading="CHEF RECOMMENDS" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offered.slice(0, 3).map((item) => (
            <FoodCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Food;
