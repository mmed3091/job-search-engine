export default function Header() {
    return (
        <header style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            backgroundColor: '#356',
            color: 'white',
            padding: '10px 20px',
            zIndex: 1000
        }}>
            <h1>Job Search Engine</h1>
        </header>
    );
}
