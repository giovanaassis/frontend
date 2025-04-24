import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <main className="app flex w-full h-full">
        {/* CONTENT SECTION */}
        <section className="bg-primary-green w-[70%]">
          <Navbar />
          {/* TITLE */}
          <div>
            <h1 className="capitalize text-4xl ml-16">grab your</h1>
            <span className="capitalize font-display text-7xl">frappuccino!</span>
          </div>
        </section>

        {/* DYNAMIC COLOR SECTION */}
        <section className="bg-caramel w-[30%]"></section>
      </main>
    </>
  )
}

export default App
