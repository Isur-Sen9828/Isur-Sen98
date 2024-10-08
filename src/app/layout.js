import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sen Dev Portfolio App",
  description: "Digital precense of SenDev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen">
      <TransitionProvider>{children}</TransitionProvider>
        </div>
      </body>
    </html>
  );
}
