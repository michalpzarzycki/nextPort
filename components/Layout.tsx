import Header from './Header';

const Layout = ({children}: any) => {
    return <>
        <Header />
        {children}
        <p>footer</p>
    </>
}

export default Layout;