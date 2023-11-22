import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth"
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({item}) => {
    const {image, name, recipe, price} = item
    const { user } = useAuth();
    const navigate = useNavigate()
    const location = useLocation();

    const handleAddToCart = () => {
      console.log(item);
      if(user && user.email){
        // TODO: send item to the database
      }
      else{
        Swal.fire({
          title: "Your are not logged-in!",
          text: "You have to login to add to cart!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Go To Login!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login", {state: {from: location}})
          }
        });
      }
    }
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
            <button onClick={() => handleAddToCart(item)} className="btn btn-button text-amber-400 shadow-sm shadow-amber-400 hover:bg-neutral">Add To Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;