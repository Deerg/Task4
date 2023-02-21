import { movies } from "../utils/movies";

const SearchBar = ({search, setSearch, maxLength, setMaxLength, movies, setMovies,direction, setDirection}) => {

    const searchHandler = (e) => {
        setSearch(e.target.value);
    }

    const maxLengthHandler = (e) => {
        setMaxLength(e.target.value);
    }
    const sortedMovies = [...movies];
    const sortMovie = () => {
        if(direction === 'asc')
        {
            sortedMovies.sort((a,b) => a.length - b.length)
            setMovies(sortedMovies);
            setDirection('desc');
        }
        else
        {
            sortedMovies.sort((a,b) => b.length - a.length)
            setMovies(sortedMovies); 
            setDirection('asc'); 
        }
        
    }
    return <>
        <label htmlFor="search">Search Query</label>
        <input type="text" name="search" onChange={searchHandler} value={search} />
        <label htmlFor="max-length">Max Length</label>
        <input type="number" name="max-length" onChange={maxLengthHandler} value={maxLength} />
        <button name="sort" onClick={sortMovie}>Sort</button>
    </>
}

export default SearchBar;