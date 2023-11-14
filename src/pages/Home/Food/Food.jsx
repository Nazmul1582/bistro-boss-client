import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import image from "../../../assets/home/slide1.jpg";

const Food = () => {
  return (
    <section>
      <div className="container mx-auto py-20">
        <SectionTitle subHeading="Should try" heading="CHEF RECOMMENDS" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img className="h-96 w-full object-cover" src={image} alt="food image" />
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title">Caeser Salad</h2>
              <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-button text-amber-400 shadow-sm shadow-amber-400 hover:bg-neutral">Add To Cart</button>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img className="h-96 w-full object-cover" src={image} alt="food image" />
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title">Caeser Salad</h2>
              <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-button text-amber-400 shadow-sm shadow-amber-400 hover:bg-neutral">Add To Cart</button>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img className="h-96 w-full object-cover" src={image} alt="food image" />
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title">Caeser Salad</h2>
              <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-button text-amber-400 shadow-sm shadow-amber-400 hover:bg-neutral">Add To Cart</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Food;
