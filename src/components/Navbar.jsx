
import img3 from '../Assets/10images/blog3.jpg'
import {  useLocation } from "react-router-dom"
import CustomNavbar from './CustomNavbar'

const Navbar = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  return (
    <>
      <CustomNavbar/>
     
      {isContactPage && <div>
        <img src={img3} alt="" width={"100%"} height={"700px"}/>
        </div>}

    </>
  )
}

export default Navbar