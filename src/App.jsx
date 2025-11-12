import PageTransition from './components/PageTransition'
import SmoothScrollProvider from './components/SmoothScrollProvider'
import CustomCursor from './components/CustomCursor'
import HeroSpline from './components/HeroSpline'
import Lookbook from './components/Lookbook'
import FabricStory from './components/FabricStory'

function App() {
  return (
    <SmoothScrollProvider>
      <CustomCursor />
      <PageTransition>
        <main className="bg-[#FDFBF5]">
          <HeroSpline />
          <Lookbook />
          <FabricStory />
        </main>
      </PageTransition>
    </SmoothScrollProvider>
  )
}

export default App
