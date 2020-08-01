import React, {useState} from 'react'
import SearchNav from './SearchNav'
import TopicNav from './TopicNav'
import HomeBody from './HomeBody'

const HomePage = () => {
    
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch(`/api/search?searchQuery=${searchTerm}`, {
            method: 'get',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then((res) => res.json())
            .then((res) => {
              console.log(res);
              setResults(res);
            })
            .catch((error) => {
              console.log(error);
            });
    }

    return (
        <>
            <TopicNav />
            <SearchNav handleSubmit={handleSubmit} setSearchTerm={setSearchTerm} />
            <HomeBody />
        </>
    )
}

export default HomePage