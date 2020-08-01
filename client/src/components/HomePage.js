import React from 'react'
import SearchNav from './SearchNav'
import TopicNav from './TopicNav'
import HomeBody from './HomeBody'


const HomePage = () => {
    return (
        <>
            <TopicNav />
            <SearchNav />
            <HomeBody />
        </>
    )
}

export default HomePage