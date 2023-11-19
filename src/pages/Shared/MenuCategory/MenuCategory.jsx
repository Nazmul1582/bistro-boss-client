import { Link } from "react-router-dom"
import useMenu from "../../../hooks/useMenu"
import MenuItem from "../MenuItem/MenuItem"

const MenuCategory = ({category, btnText}) => {
    const [menu] = useMenu()
    const items = menu.filter(item => item.category === category)
  return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <MenuItem key={item._id} menuItem={item} />
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <Link to={`/order-food/${category}`}><button className="btn btn-outline border-0 border-b-2">{btnText ? btnText : "ORDER YOUR FAVOURITE FOOD"}</button></Link>
        </div>
      </>
  )
}

export default MenuCategory