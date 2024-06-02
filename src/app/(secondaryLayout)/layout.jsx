import Footer from "@/components/UI/Footer";
import HeaderSecondary from "@/components/UI/HeaderSecondary";

export default function Layout({ children }) {
  return (
    <div>
      <HeaderSecondary />

      {children}

      <Footer />
    </div>
  );
}
