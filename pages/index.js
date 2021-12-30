import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Header/Navbar";
import Login from "../Component/Login/Login";
import useAuth from "../Hooks/useAuth";


export default function Home() {
  const { user } = useAuth()
  console.log(user);
  return (
    <>
      {
        user.email ? <><Navbar></Navbar>
          <Footer></Footer></> : <Login></Login>
      }
    </>
  )
}
