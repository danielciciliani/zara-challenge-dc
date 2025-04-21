function BackToGrid() {

    const backIcon = "./../public/back_icon.svg";

    return (
        <>
            {/* <button className="button_back-to-grid"><span><img src="./../public/back_icon.svg" alt="" /></span>Back</button> */}

            <div className="button_back-to-grid">
                <img className="button_back-to-grid_icon" src={backIcon} alt="back icon" />
                <p className="button_back-to-grid_text">back</p>
            </div>
        </>
    );
}


export default BackToGrid;