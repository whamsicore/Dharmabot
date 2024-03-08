import type { Metadata } from "next";
// Removed the import of Inter from "next/font/google" due to the error with ES modules.
import "./globals.css";
import "@copilotkit/react-ui/styles.css";
import "@copilotkit/react-textarea/styles.css";

// Removed the usage of Inter for font due to the error with ES modules.

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Removed the className={inter.className} due to the removal of Inter font import */}
      <body>{children}</body>
    </html>
  );
}
