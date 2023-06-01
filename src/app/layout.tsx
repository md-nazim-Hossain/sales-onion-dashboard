import Navbar from '@components/layout/Navbar';
import Sidebar from '@components/layout/Sidebar';
import '@styles/globals.css';

export const metadata = {
  title: 'Onion Sales | Dashboard',
  description: 'sales dashboard design use for your business make easy',
  icons: {
    icon: '/assets/icons/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="w-screen h-screen">
          <Navbar />
          <div className="flex">
            <Sidebar />
            <div className="flex-1 bg-theme-base-1 overflow-y-scroll scroll max-h-[calc(100vh-89px)]">
              <div className="p-5">{children}</div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
