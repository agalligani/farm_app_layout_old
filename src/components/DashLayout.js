import React from 'react'
import {Outlet} from 'react-router-dom'
import DashHeader from './DashHeader'
// import DashFooter from './DashFooter'
import BannerMenu from './BannerMenu'

const DashLayout = () => {
  return (
    <React.Fragment>
       <BannerMenu />
        <div className="dash-container">
            <Outlet />
        </div>
        {/* <DashFooter /> */}
    </React.Fragment>
  )
}

export default DashLayout