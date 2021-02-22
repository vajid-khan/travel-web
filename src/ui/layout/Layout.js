import Head from "next/head";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = props => {
    
        return (
            <React.Fragment>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>CAB</title>
                    <link rel="manifest" href="/static/manifest.json"/>
                    <meta name="mobile-web-app-capable" content="yes"/>
                    <meta name="apple-mobile-web-app-capable" content="yes"/>
                    <meta name="msapplication-starturl" content="/" />
                </Head>
                <Head>
                    <link rel="dns-prefetch" href="https://maps.googleapis.com"></link>
                    <link defer href="/static/css/custom.css" rel="stylesheet" />
                    <link defer href="/static/css/fontawesome-all.min.css" rel="stylesheet" />
                </Head>
                <Head>
                    <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
                    <script async defer src="/static/js/bootstrap.min.js"></script>
                    <script src="/static/js/custom.js"></script>
                    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAyHRYiEycCxiiEBixPjQ3TRq-gsHXz6N0&libraries=geometry,drawing,places"></script>
                </Head>

                <Header/>

                {props.children}

                <Footer />
            </React.Fragment>
        );
}


export default Layout;