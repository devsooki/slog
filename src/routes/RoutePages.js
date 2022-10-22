import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// contant
import ROUTE_PATH from 'constant/RoutePath';

// component
import Home from 'pages/home/Home';
import Write from 'pages/write/Write';
import Detail from 'pages/detail/Detail';

const RoutePages = () => {
  return (
    <Routes>
      <Route path={ROUTE_PATH.home} element={<Home />} />
      <Route path={ROUTE_PATH.write} element={<Write />} />
      <Route path={ROUTE_PATH.detail} element={<Detail />} />
    </Routes>
  )
}

export default RoutePages