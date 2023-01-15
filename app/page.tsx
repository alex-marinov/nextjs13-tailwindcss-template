import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-slate-200 h-screen">
      <div className="p-5 text-center">
        Next.js 13 with experimental app directory and Tailwind CSS Template
      </div>
    </main>
  );
}
