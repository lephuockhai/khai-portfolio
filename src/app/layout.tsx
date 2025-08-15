import { LanguageProvider } from './components/LanguageContext';
import './globals.css';
import FloatingButtons from './components/FloatingButtons';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
          <FloatingButtons />
        </LanguageProvider>
      </body>
    </html>
  );
}