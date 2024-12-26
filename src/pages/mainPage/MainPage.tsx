import About from "./layouts/About"
import Header from "./layouts/Header"

function MainPage() {
  return (
    <main className="max-w-[1920px] h-schreen flex flex-col overflow-x-hidden">
        <Header />
        <About />
    </main>
  )
}

export default MainPage
