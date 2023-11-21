const FoodCard = ({item}) => {
    const {image, name, recipe, price} = item
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="h-96 w-full object-cover" src={image} alt="food image" />
        </figure>
        <p className="text-white bg-black px-5 py-2 rounded-md absolute top-5 right-5">${price}</p>
        <div className="card-body items-center">
          <h2 className="card-title">{name}</h2>
          <p className="text-center">{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-button text-amber-400 shadow-sm shadow-amber-400 hover:bg-neutral">Add To Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;