import "@/styles/globals.css";
import "@/styles/drawer.css";
import "@/styles/swiper.css";
import "@/styles/mui-helper.css";
import { Inter } from "next/font/google";
import "tailwindcss/tailwind.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
