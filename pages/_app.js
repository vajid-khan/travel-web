import App from "next/app";
import Store from "../src/store/Store";
import { Provider } from "react-redux";
import Layout from "../src/ui/layout/Layout";

//styles
import bootstrap from "../src/styles/bootstrap";
import color from "../src/styles/color";
import style from "../src/styles/style";
import responsive from "../src/styles/responsive";

//page loader indicator
import NextProgressBar from "../src/ui/loader/NextProgressBar";

class CabApp extends App {
    // Only uncomment this method if you have blocking data requirements for
    // every single page in your application. This disables the ability to
    // perform automatic static optimization, causing every page in your app to
    // be server-side rendered.
    //
    // static async getInitialProps({ Component, router, ctx }) {
    //     let pageProps = {}

    //     if (Component.getInitialProps) {
    //         pageProps = await Component.getInitialProps(ctx)
    //     }

    //     return { pageProps }
    // }

    render() {
        const { Component, pageProps, router } = this.props
        return (
            <Provider store={Store}>
                <Layout>
                    <NextProgressBar
                        color="#dd3751"
                        startPosition={0.3}
                        stopDelayMs={200}
                        height={3}
                        options= {{showSpinner:false}}
                    />
                    <Component {...pageProps} key={router.route} />
                    <style jsx global>
                        {bootstrap}
                    </style>
                    <style jsx global>
                        {style}
                    </style>
                    <style jsx global>
                        {color}
                    </style>
                    <style jsx global>
                        {responsive}
                    </style>
                </Layout>
            </Provider>
        )
    }
}

export default CabApp