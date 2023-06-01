import "@styles/globals.css";

export const metadata = {
  title: "Sales Dashboard",
  description: "sales dashboard design use for your business make easy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
