import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Home from "./_components";

export default function Index() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}