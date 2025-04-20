import "./Specs.scss"

function Specs({ specs, productBasicData, productDetail }) {
    

const specsToShow = {
    brand: productBasicData?.brand || "N/A",
    name: productBasicData?.name || "N/A",
    description: productDetail?.description || "N/A",
    resolution: specs?.resolution || "N/A",
    processor: specs?.processor || "N/A",
    mainCamera: specs?.mainCamera || "N/A",
    selfieCamera: specs?.selfieCamera || "N/A",
    battery: specs?.battery || "N/A",
    os: specs?.os || "N/A",
    screenRefreshRate: specs?.screenRefreshRate || "N/A",
};

    return (
        <>
            <p className="specs_title">Specifications</p>
            <div className="specs_table">
                <table className="specs_table_table">
                    <tbody>
                        {Object.entries(specsToShow).map(([key, value]) => (
                            <tr className="specs_table_row" key={key}>
                                <td className="specs_table_key">{key}</td>
                                <td className="specs_table_value">{value}</td>
                            </tr> 
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Specs;