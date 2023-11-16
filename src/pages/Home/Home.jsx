import PopularMenu from "./PopularMenu/PopularMenu"
import SectionCover from "../Shared/SectionCover/SectionCover"
import Banner from "./Banner/Banner"
import Category from "./Category/Category"
import ContactUs from "./ContactUs/ContactUs"
import Food from "./Food/Food"
import Featured from "./Featured/Featured"
import Testimonials from "./Testimonials/Testimonials"
import Head from "../Shared/Head/Head"
import img from '../../assets/home/chef-service.jpg'

const Home = () => {
  return (
    <>
        <Head pageTitle="Home" />
        <Banner />
        <Category />
        <SectionCover img={img} title="Bistro Boss" />
        <PopularMenu />
        <ContactUs />
        <Food />
        <Featured />
        <Testimonials />
    </>
  )
}

export default Home