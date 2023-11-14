import image from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Featured = () => {
  return (
    <section
      className="bg-fixed bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="py-20 w-full h-full backdrop-brightness-50 text-white">
        <div className="container mx-auto">
          <SectionTitle subHeading="Check it out" heading="FROM OUR MENU" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:mx-20">
            <img src={image} alt="featured image" />
            <div>
              <h4 className="text-lg">March 20, 2023</h4>
              <h4 className="text-lg">WHERE CAN I GET SOME?</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button className="btn btn-outline border-0 border-b-2 text-white mt-5">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
