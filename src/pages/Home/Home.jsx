import PopularMenu from "./PopularMenu/PopularMenu"
import Cover from "../Shared/Cover/Cover"
import Banner from "./Banner/Banner"
import Category from "./Category/Category"
import ContactUs from "./ContactUs/ContactUs"
import Food from "./Food/Food"
import Featured from "./Featured/Featured"

const Home = () => {
  return (
    <>
        <Banner />
        <Category />
        <Cover />
        <PopularMenu />
        <ContactUs />
        <Food />
        <Featured />
    </>
  )
}

export default Home