import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Gallery from '../screens/Gallery'
import Members from '../screens/Members';
import Login from '../screens/Login';
import Overview from '../screens/Overview';

function Navigation() {
  return (
    <Routes>
        <Route path={"/"} element={<Gallery />} />
        <Route path={"/overview"} element={<Overview />} />
        <Route path={"/members"} element={<Members />} />
        <Route path={"/login"} element={<Login />} />
    </Routes>
  )
}

export default Navigation