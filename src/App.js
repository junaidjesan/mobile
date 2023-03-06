import logo from "./logo.svg";
import "./App.css";
import Nav from "./Shared/Nav";
import Avatar from "./Shared/Avatar";
import Body from "./Shared/Body";
import Footer from "./Shared/Footer";

function App() {
  return (
    <>
      <div className="bg-[#E5E5E5] py-20">
        <div className="w-[428px] h-[926px] bg-[#1B202D] rounded-3xl mx-auto text-white">
          <div className="pt-[19px] pb-[27px]">
            <Nav/>
          </div>
          <div className="mb-16">
            <Avatar/>
          </div>
          <div>
            <Body/>
          </div>
          <div className="mt-48">
            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
