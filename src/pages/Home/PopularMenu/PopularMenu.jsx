import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data.filter((item) => item.category === "popular"));
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <SectionTitle subHeading="From Our Menu" heading="Popular Items" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menu.map((item) => (
            <MenuItem key={item._id} menuItem={item} />
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <button className="btn btn-outline border-0 border-b-2">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularMenu;
