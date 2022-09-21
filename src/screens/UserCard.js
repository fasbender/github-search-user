import React, { useState } from 'react'
import ImgMediaCard from '../components/ImgMediaCard'
import FullWidthTextField from '../components/FullWidthTextField'
import AlignItemsList from '../components/AlignItemsList'
import CircularIndeterminate from '../components/CircularIndeterminate'
import axios from 'axios'

const UserCard = () => {

    const [user, setUser] = useState(null)
    const [followers, setFollowers] = useState(null)
    const [loading, setLoading] = useState(false)

        const getData = async(name) => {
            try {
                setLoading(true)
                const response = await axios.get(`/users/${name}`)
                const resFollowers = await axios.get(response.data.followers_url)
                setUser(response.data)
                setFollowers(resFollowers.data)
            } catch (error) {
                console.log(error.message)
            }
            setLoading(false)
        }

  return (
    <div className='container'>
        <div className='search'>
            <FullWidthTextField getData={getData}/>
        </div>
        <br />
        <div className='user'>
        {
            user ?
            <>
                {
                    loading ?

                        <CircularIndeterminate/>

                        :

                        <>
                            <div className='profile'>
                                <ImgMediaCard user={user}/> 
                            </div>
                            <div className='followers'>
                                <h3>Followers</h3>
                                <AlignItemsList followers={followers} getData={getData}/>
                            </div>
                        </>
                }
            </>
            : 
            <h1>Search for Github profile</h1>
        }
        </div>
    </div>
  )
}

export default UserCard