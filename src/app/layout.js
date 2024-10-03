import "./globals.css";

export const metadata = {
  title: "FadeIn",
  description: "npm i text-fade-in",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
