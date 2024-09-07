import Logo from "@/app/_components/Logo";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "@/app/_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

console.log(josefin);

export const metadata = {
  //title: "The Wild Oasis",
  title: {
    template: "%s / The Wild Oasis",
    default: " Welcome / The Wild Oasis",
  },
  description: "Luxurious hotel surrounded in the heart of the city",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-gray-50 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto bg-red-500">{children}</main>
        </div>
      </body>
    </html>
  );
}
