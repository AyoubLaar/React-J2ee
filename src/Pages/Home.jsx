import MainBody from '../components/MainBody'
import Column from '../components/Column'
import HeroElement from '../components/HeroElement'
function Home() {

  return (
    <>
      <Column gap={"50px"} padding={" 0 0 50px 0"}>
        <HeroElement />
        <MainBody />
      </Column>

    </>
  )
}

export default Home
