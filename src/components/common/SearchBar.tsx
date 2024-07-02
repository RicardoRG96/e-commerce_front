const SearchBar: React.FC = () => {
    return (
        <div>
            <form action="submit">
                <input type="text" />
                <button>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
    )
}

export default SearchBar;