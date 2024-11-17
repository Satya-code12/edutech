import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import SecondHead from "../components/Secondhead"
import Thirdhead from "../components/Thirdhead"

const Home = () => {
  return (
   <section className="h-screen p-2">
    <Navbar />
    <Header/>
    <div className="flex flex-col gap-y-12">
    <SecondHead />
    <Thirdhead />
    </div>
    <Footer />
   </section>
  )
}

export default Home