import React from 'react';
function Search(props) {
    let textInput = React.createRef();
    const handleSubmit = () => {
        const searchText = textInput.current.value;
        props.onClick(searchText);
    }
    return (
        <div className="searchBox">
            <form className="form-inline">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Search Last Name"
                    ref={textInput}
                />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default Search;