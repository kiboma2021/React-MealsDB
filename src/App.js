
import { Header,Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <main className='dark:bg-slate-800'>
      <Header/>
      <section className="m-8 p-8">
        <AllRoutes />
      </section>
      
      <Footer />



    </main>
  );
}

export default App;
