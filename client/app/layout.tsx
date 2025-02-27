export const metadata = {
  title: 'Next.js App Router',
  description: 'A Next.js App Router example',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
      </html>
  );
}