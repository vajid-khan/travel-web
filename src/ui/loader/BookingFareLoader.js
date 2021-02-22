import ContentLoader from "react-content-loader";

const Loader = props => {
    
    return (
        <ContentLoader
            height={props.height}
            width={1060}
            speed={3}
            primaryColor="#777777"
            secondaryColor="#d3d3d3"
            {...props}
        >
            <circle cx="60" cy="45" r="40" />            
            <rect x="120" y="40" rx="5" ry="5" width="400px" height="15"/>
            <rect x="530" y="40" rx="5" ry="5" width="500px" height="15" />
            <rect x="00" y="100" rx="5" ry="5" width="1030px" height="1.5" />

        </ContentLoader>
    )
}

const ImageList = (props) => (
    <React.Fragment>
        {Array(props.count)
            .fill('')
            .map((e, i) => (
                <Loader
                    height={props.height}
                    key={i}
                    style={{ opacity: Number(2 / i).toFixed(1) }}
                />
            ))}
    </React.Fragment>
)


export default ImageList