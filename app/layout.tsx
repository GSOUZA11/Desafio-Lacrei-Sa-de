import "./../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Lacrei Saúde Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>
        <Navbar />
        <main className="min-h-screen px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
