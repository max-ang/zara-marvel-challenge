import Header from "@/components/Header";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { FavoritesContextProvider } from "../utils/context";

const roboto = Roboto_Condensed({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Zara Web Challenge",
  description: "Generated by max-ang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={roboto.className}>
      <body>
        <FavoritesContextProvider>
          <Header />
          {children}
        </FavoritesContextProvider>
      </body>
    </html>
  );
}
