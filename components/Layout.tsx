import Footer from './Footer';
import Header from './Header';

const Layout = ({children}: any) => {
    return <>
        {children}
        <Footer />
    </>
}

export default Layout;