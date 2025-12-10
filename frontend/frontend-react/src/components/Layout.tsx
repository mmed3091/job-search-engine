import Header from './Header';

export default function Layout({ children}) {
    return (
        <>
            <Header />
            <main style={{ paddingTop: '60px' }}>
                {children} {/* This will be the page content */}
            </main>
        </>
    );
}
