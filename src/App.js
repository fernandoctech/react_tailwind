import bg from "./assets/bg.jpg"


function App() {
  const cards = [1, 2, 3, 4, 5]
  return (
    <div className=" flex-1  h-screen w-screen  bg-cover bg-center bg-no-repeat " style={{ background: `url(${bg})`, backgroundSize: "cover" }}>
      <div className=" flex flex-col justify-center items-center flex-1 bg-black w-full h-full bg-opacity-80 ">
        <div className="flex-1 flex justify-center items-center">
          <h1 className="text-white font-bold  lg:text-8xl text-5xl text-center ">Gilmara<span> Ferreira</span></h1>
        </div>
        <div className=" bg-black w-full bg-opacity-50 rounded-t-3xl" style={{ height: "70%" }}>
          <div className="px-16 flex lg:justify-center space-x-2 overflow-x-scroll w-full h-44 " style={{ marginTop: '-60px' }}>
            {cards.map(x => (
              <div className=" h-32 px-16 shadow-lg bg-white rounded-xl "></div>
            ))}
          </div>
          <div className='w-full flex flex-col px-16 flex-1 space-y-5'>
            <button className=" bg-black text-white rounded-lg py-3 ">Instagram</button>
            <button className=" bg-black text-white rounded-lg py-3 ">Facebook</button>
            <button className=" bg-black text-white rounded-lg py-3 ">Twitter</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
