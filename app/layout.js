import './globals.css';

export const metadata = {
    title: 'Banyu Rancang Rafting',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="overflow-x-hidden overflow-y-scroll v-bar">{children}</body>
        </html>
    );
}
