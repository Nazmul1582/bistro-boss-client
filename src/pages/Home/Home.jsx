import PopularMenu from "./PopularMenu/PopularMenu"
import Cover from "../Shared/Cover/Cover"
import Banner from "./Banner/Banner"
import Category from "./Category/Category"

const Home = () => {
  return (
    <>
        <Banner />
        <Category />
        <Cover />
        <PopularMenu />
    </>
  )
}

export default Home