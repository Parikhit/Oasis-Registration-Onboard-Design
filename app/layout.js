import { FormProvider } from '@/context/form.context';

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Oasis',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <FormProvider>{children}</FormProvider>
            </body>
        </html>
    );
}
