
import { Header,Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <main>
      <Header/>
      <section className="h-screen bg-gray-200" >
        <AllRoutes />
      </section>
      
      <Footer />



    </main>
  );
}

export default App;
