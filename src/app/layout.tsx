import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EUPHORIA STORE",
  description: "E-commerce app with Next.js & NextIntl",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
