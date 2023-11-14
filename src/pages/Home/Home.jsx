import PopularMenu from "./PopularMenu/PopularMenu"
import Cover from "../Shared/Cover/Cover"
import Banner from "./Banner/Banner"
import Category from "./Category/Category"
import ContactUs from "./ContactUs/ContactUs"

const Home = () => {
  return (
    <>
        <Banner />
        <Category />
        <Cover />
        <PopularMenu />
        <ContactUs />
    </>
  )
}

export default Home