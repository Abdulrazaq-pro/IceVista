import Content from "./components/Content";
import First_Page from "./components/First_Page";
import Footer from "./components/Footers";

export default function Home() {
  return (
    <main className="bg-[#04010F] text-white">
      <First_Page />
      <Content />
      <Footer />
    </main>
  );
}
