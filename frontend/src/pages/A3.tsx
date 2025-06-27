const A3 = () => {

    const A3Features = [ "BrowserRouter", "Navbar" ];
    const featureDisplay = A3Features.map( (feature, index) => (
        <p style={{lineHeight: 1.5}} key={`feature-${index}`}>
            • {feature}
        </p>
    ));

    return (
        <div className="component fill" style={{ alignContent: "center", textAlign: "center" }}>
                You're already using the implemented features &gt;w&lt;
                <br/><br/>This includes:
                <br/><br/>{featureDisplay}
        </div>
    );
};

export default A3;