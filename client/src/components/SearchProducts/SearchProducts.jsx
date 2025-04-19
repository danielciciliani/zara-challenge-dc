import "./SearchProducts.scss";

function SearchProducts({searchTerm, setSearchTerm, searchResults}) {

    return (
        <>
            <div className="search_bar">
                <input 
                    type="text" 
                    placeholder="Search for a smartphone..."
                    className="search_bar_input"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <p className="search_bar_results">{`${searchResults} results`}</p>
            </div>
        </>
    );
}

export default SearchProducts;