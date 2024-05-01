import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AKimgs - Your Vision, Our Library.",
  description: "Akimgs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="description" content="AKimgs - Your Vision, Our Library. AKimgs provides free royalty-free or copyright images with over 4 million images data." />
      <meta name="keywords" content="AKimgs, royalty-free images, copyright-free images, free images, stock photos" />
      <body>{children}</body>
    </html>
  );
}
