import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rozuke Portafolio",
  description:
    "Job portafolio to show my information about me, skills and projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>{children}</body>
    </html>
  );
}
