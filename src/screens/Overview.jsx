import React from 'react'
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { FaBook, FaRegClock } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

function Overview() {
    // const [data, setdata] = useState([])

    // const HandleData = async () => {
    //   try {
    //     const res = await axios.get("https://book-server-ahrs.onrender.com/members")
    //     setdata(res.data)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // console.log(data);

    // useEffect(() => {
    //   HandleData()
    // }, [])
    return (
        <div className="w-full min-h-screen relative">
            <div className="w-[85%] h-full top-0 absolute -translate-x-1/2 left-1/2 grid grid-cols-12 grid-rows-40 gap-5 my-5">
                <div className="col-span-4 row-span-13">
                    <Card booksNum={210} info={"borrowed"} num1={"+12"} num2={"+5%"}>
                        <FaBook className="text-4xl text-blue-500" />
                    </Card>
                </div>
                <div className="col-span-4 row-span-13">
                    <Card booksNum={32} info={"books overdue"} num1={"-2%"} num2={"$860"} >
                        <FaRegClock className="text-4xl text-blue-500" />
                    </Card>
                </div>
                <div className="col-span-4 row-span-13">
                    <Card booksNum={340} info={"visitors"} num1={"+42"} num2={"+102%"} >
                        <FiUsers className="text-4xl text-blue-500" />
                    </Card>
                </div>
                <div className="col-span-12 row-span-28 bg-orange-200"></div>
            </div>
        </div>
    )
}

export default Overview