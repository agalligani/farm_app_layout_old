import { Outlet } from 'react-router-dom'
import BannerMenu from './BannerMenu'

const Layout = () => {
    return (
        <>
           <BannerMenu />
            <div className="dash-container">
                <Outlet />
            </div>
            {/* <DashFooter /> */}
        </>
      )
    }
    
export default Layout