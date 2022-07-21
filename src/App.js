import {useEffect, useState, Suspense } from 'react'
import Gallery from './components/Gallery'
import Searchbar from './components/Searchbar'
//import { DataContext } from './context/DataContext'
import {createResource as fetchData} from './helper'
import Spinner from './components/Spinner'

function App() {
	let [searchTerm, setSearchTerm] = useState('')
	let [message] = useState('Search for Music!')
	let [data, setData] = useState(null)

	//const API_URL = 'https://itunes.apple.com/search?term='

	useEffect(() => {
		if (searchTerm) {
			document.title=`${searchTerm} Music`
			setData(fetchData(searchTerm))
		}
	}, [searchTerm])
	
	
	const handleSearch = (e, term) => {
		e.preventDefault()
		setSearchTerm(term)
	}

	const renderGallery = () => {
		if(data){
			return (
				<Suspense fallback={<Spinner />}>
					<Gallery data={data} />
				</Suspense>
			)
		}
	}
	
	return (
		<div className='App'>
			<Searchbar handleSearch = {handleSearch}/>
			{message}
			{renderGallery()}
		</div>
  	);
}

export default App;
