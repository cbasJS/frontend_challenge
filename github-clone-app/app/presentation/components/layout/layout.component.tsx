import { Inter } from "next/font/google";
import Header from "../header/header.component";
import Footer from "../footer/footer.component";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className={inter.className}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
