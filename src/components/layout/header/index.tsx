import phoneIcon from '../../../assets/images/phoneIcon.png'
import envelopeIcon from '../../../assets/images/envelopeIcon.png'
import instagram from '../../../assets/images/instagram.png'
import facebook from '../../../assets/images/facebook.png'
import twitter from '../../../assets/images/twitter.png'
import youtube from '../../../assets/images/youtube.png'
import userIcon from '../../../assets/images/userIcon.png'
import searchIcon from '../../../assets/images/searchIcon.png'
import Cart from '../../../assets/images/Cart.png'
import heart from '../../../assets/images/heart.png'
import { BurgerMenu, BurgerMenuContent, DarkHeader, Div, LoginDiv, MainDiv, MobileDel, NavDiv, UserMobile, WhiteHeader } from './header.styled'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [burger, setBurger] = useState<Boolean>(false);
    const burgerChange = () => {
        setBurger(!burger)
    }

    return (
        <MainDiv>
            <DarkHeader>
                <Div>
                    <div>
                        <div>
                            <img src={phoneIcon} alt='phone' />
                            <h6>
                                (225) 555-0118
                            </h6>
                        </div>
                        <div>
                            <img src={envelopeIcon} alt='envelopeIcon' />
                            <h6>
                                luka.pitsk@gmail.com
                            </h6>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h6>
                                Follow Us  and get a chance to win 80% off
                            </h6>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h6>
                                Follow Us  :
                            </h6>
                        </div>
                        <div>
                            <img src={instagram} alt='instagram' />
                            <img src={youtube} alt='youtube' />
                            <img src={facebook} alt='facebook' />
                            <img src={twitter} alt='twitter' />
                        </div>
                    </div>
                </Div>
            </DarkHeader>
            <WhiteHeader>
                <Div>
                    <h1>
                        <NavLink to='/'>
                            LukaStore
                        </NavLink>
                    </h1>
                    <NavDiv>
                        <nav>
                            <NavLink to="/">
                                Home
                            </NavLink>
                            <NavLink to="products">
                                Products
                            </NavLink>
                            <NavLink to="categories">
                                Categories
                            </NavLink>
                            <NavLink to="about">
                                About Us
                            </NavLink>
                        </nav>
                        <div>
                            <LoginDiv>
                                <UserMobile>
                                    <img src={userIcon} alt='user' />
                                    <h4>
                                        Login / Register
                                    </h4>
                                </UserMobile>
                                <div>
                                    <img src={searchIcon} alt='search' />
                                </div>
                                <div>
                                    <img src={Cart} alt='Cart' />
                                </div>
                                <MobileDel>
                                    <img src={heart} alt='heart' />
                                </MobileDel>
                                <BurgerMenu onClick={() => burgerChange()}>
                                    <div className={`d1 ${burger ? 'actived1' : ''}`}></div>
                                    <div className={`d2 ${burger ? 'actived2' : ''}`}></div>
                                    <div className={`d3 ${burger ? 'actived3' : ''}`}></div>
                                </BurgerMenu>
                                <BurgerMenuContent className={burger ? '' : 'activeContent'}>
                                    <div>
                                        <NavLink to="/">
                                            Home
                                        </NavLink>
                                        <NavLink to="products">
                                            Products
                                        </NavLink>
                                        <NavLink to="categories">
                                            Categories
                                        </NavLink>
                                        <NavLink to="about">
                                            About Us
                                        </NavLink>
                                    </div>
                                </BurgerMenuContent>
                            </LoginDiv>
                        </div>
                    </NavDiv>
                </Div>
            </WhiteHeader>
        </MainDiv>
    )
}

export default Header