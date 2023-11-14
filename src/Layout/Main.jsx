import { Outlet } from 'react-router-dom'
import Footer from '../pages/Shared/Footer/Footer'
import Header from '../pages/Shared/Header/Header'

const Main = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Main