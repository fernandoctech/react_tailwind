
const cards = [1,2,3,4,5]

function App() {
  return (
    <div className="flex flex-1 flex-col h-screen w-screen ">
      <header className="w-full h-1/4 bg-green-300 rounded-b-3xl">
      </header>
      <div className="overflow-x-scroll flex py-4 w-full px-16 space-x-2 " style={{overflowX:"scroll",marginTop:"-80px"}}>
        {cards.map(x=>(
          <div className=" h-32 w-28 bg-white shadow-lg flex px-10 rounded-lg ">
            <div className="w-32 h-32">
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col justify-center space-y-5 px-16">
        <button className="bg-green-300 text-white rounded-lg py-5">
          Agendar Consultas
        </button>
        <button className="bg-green-300 text-white rounded-lg py-5">
          Sobre a Nutri
        </button>
      </div>
      <div className="flex flex-1">

      </div>
    </div>
  );
}

export default App;
