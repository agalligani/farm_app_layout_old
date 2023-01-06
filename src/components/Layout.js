import { Outlet } from 'react-router-dom'
import BannerMenu from './BannerMenu'
import MainBody from './MainBody'

const Layout = () => {
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
    
export default Layout