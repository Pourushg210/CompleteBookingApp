import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/navigation";
import "@/app/_styles/globals.css";

export const metadata = {
  //title: "The Wild Oasis",
  title: {
    template: "%s / The Wild Oasis",
    default: " / The Wild Oasis",
  },
  description: "Luxurious hotel surrounded in the heart of the city",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-gray-50 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
