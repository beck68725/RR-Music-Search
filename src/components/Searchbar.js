// Seachbar.js
import { useState } from 'react'

function SearchBar(props){
    // We can comment out our searchTerm state variable as we are not using it!
    let [searchTerm, setSearchTerm] = useState('')

    return (
            <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
                <input type="text" placeholder="Search Here"
                    onChange={(e) => setSearchTerm(e.target.value)
                    } />
                <input type="submit" />
            </form>
    )
}

export default SearchBar
