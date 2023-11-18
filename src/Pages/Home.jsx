import NavBar from '../components/Navbar'
import MainBody from '../components/MainBody'
function Home() {

  return (
    <>
      <div style={{ backgroundImage: "url(/assets/hero_image.jpg)" }}>
        <NavBar />
      </div>
      <MainBody />
    </>
  )
}

export default Home
