import Page404 from "../src/ui/pages/page404";

export default class ErrorPage extends React.Component {

    static propTypes() {
        return {
            errorCode: React.PropTypes.number.isRequired,
            url: React.PropTypes.string.isRequired
        }
    }

    static getInitialProps({ res, xhr }) {
        const errorCode = res ? res.statusCode : (xhr ? xhr.status : null)
        return { errorCode }
    }

    render() {
        let page = null;
        switch (this.props.errorCode) {
            case 404:
                page = <Page404/>
                break;
        }
        return page;
    }
}