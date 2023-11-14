import PopularMenu from "./PopularMenu/PopularMenu"
import Cover from "../Shared/Cover/Cover"
import Banner from "./Banner/Banner"
import Category from "./Category/Category"
import ContactUs from "./ContactUs/ContactUs"
import Food from "./Food/Food"
import Featured from "./Featured/Featured"
import Testimonials from "./Testimonials/Testimonials"
import Head from "../Shared/Head/Head"

const Home = () => {
  return (
    <>
        <Head pageTitle="Home" />
        <Banner />
        <Category />
        <Cover />
        <PopularMenu />
        <ContactUs />
        <Food />
        <Featured />
        <Testimonials />
    </>
  )
}

export default Home