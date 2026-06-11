// app/layout.tsx
import type { Metadata } from "next";
import { Roboto, Rubik } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--ff-roboto",
});

const rubik = Rubik({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--ff-rubik",
});

export const metadata: Metadata = {
  title: "Foodie - O Melhor Hambúrguer da Cidade!",
  description: "Os melhores hambúrgueres da cidade! Comida deliciosa entregue rápido.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${roboto.variable} ${rubik.variable}`}>
        {children}
      </body>
    </html>
  );
}