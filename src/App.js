import {useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import Searchbar from './components/Searchbar'
import { DataContext } from './context/DataContext'

function App() {
	let [searchTerm, setSearchTerm] = useState('')
	let [message, setMessage] = useState('Search for Music!')
	let [data, setData] = useState([])

	const API_URL = 'https://itunes.apple.com/search?term='

	useEffect(() => {
		if(searchTerm) {
			const fetchData = async () => {
				document.title = `${searchTerm} Music`
				const response = await fetch(API_URL + searchTerm)
				const resData = await response.json()
				if (resData.results.length > 0) {
					setData(resData.results)
				} else {
					setMessage('Not Found')
				}
			}
			fetchData()
		}
	}, [searchTerm])
	
	const handleSearch = (e, term) => {
		e.preventDefault()
		setSearchTerm(term)
	}

	return (
		<div>
			<Searchbar handleSearch = {handleSearch}/>
			{message}
			<DataContext.Provider value={data}>
				<Gallery />
			</DataContext.Provider>
		</div>
  	);
}

export default App;
