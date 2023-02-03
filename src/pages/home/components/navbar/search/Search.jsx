import './Search.css'

const Search = ({ setSearch }) => {
    return (
        <div className="search-bar">
            <input
                className='input'
                placeholder="Digite o nome do time..."
                onChange={(e) => {
                    console.log(e.target.value)
                    setSearch(e.target.value)
                }
                }
            />
        </div>
    )
}

export default Search