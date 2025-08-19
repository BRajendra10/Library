import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MemberCard from '../components/MembersDisplay'

function Members() {
  const [data, setdata] = useState([])

  const HandleData = async () => {
    try {
      const res = await axios.get("https://book-server-ahrs.onrender.com/members")
      setdata(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(data); // plese remove this line 

  useEffect(() => {
    HandleData()
  }, [])

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-blue-200">
      {/* <MemberCard /> */}
    </div>
  )
}

export default Members