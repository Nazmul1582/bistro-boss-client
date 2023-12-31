import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../pages/Shared/Footer/Footer'
import Header from '../pages/Shared/Header/Header'

const Main = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signup")
  return (
    <>
        {hideHeaderFooter || <Header />}
        <Outlet />
        {hideHeaderFooter || <Footer />}
    </>
  )
}

export default Main