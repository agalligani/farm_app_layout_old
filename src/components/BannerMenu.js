import MainLink from './MainLink'

const BannerMenu = () => {
  return (
    <>
    <header role="banner" className='banner__menu'>
        <div className="banner__menu__wider">
            <div className="banner__fixed__pos">
                <div className="banner__inner_zone">
                    <div className="">
                        <nav aria-label="Primary" role="navigation" className="primary__nav">
                            <MainLink />
                            <MainLink />
                            <MainLink />
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}
export default BannerMenu