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
import userPic from '../../../assets/images/userPic.png'
import { BurgerMenu, BurgerMenuContent, DarkHeader, Div, LoginDiv, MainDiv, MobileDel, NavDiv, UserMobile, WhiteHeader } from './header.styled'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

interface user {
    email: string;
    firstName: string;
    gender: string;
    id: number;
    image: string;
    lastName: string;
    username: string
}

const Header = () => {
    const [burger, setBurger] = useState<Boolean>(false)
    const [modal, setModal] = useState<Boolean>(false)
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loggedIn, setLoggedIn] = useState<boolean>(
        Boolean(localStorage.getItem('loggedIn'))
    );
    const [userData, setUserData] = useState<user | null>(
        JSON.parse(localStorage.getItem('userData') || 'null')
    );

    const login = () => {

        if (!username.trim() || !password.trim()) {
            return alert('Username and password are required.')
        }

        const loginData = {
            username: 'kminchelle',
            password: '0lelplR',
        };

        if (username == loginData.username && password == loginData.password) {
            axios.post('https://dummyjson.com/auth/login', loginData)
                .then(response => {
                    setUserData(response.data)
                    setLoggedIn(true)
                    setModal(false)
                    localStorage.setItem('loggedIn', 'true')
                    localStorage.setItem('userData', JSON.stringify(response.data))
                })
        } else {
            setLoggedIn(false);
            alert('invalid password or username')
        }
    };

    const burgerChange = () => {
        setBurger(!burger)
    }

    const modalPop = () => {
        setModal(!modal)
    }

    return (
        <MainDiv>
            {modal ?
                <div className='modalBg'>
                    <div className='modal'>
                        <p onClick={() => modalPop()} className='x'>&#10060;</p>
                        {!loggedIn ? <>
                            <h1>
                                Username: <span>kminchelle</span>
                            </h1>
                            <input
                                onChange={(e) => setUsername(e.target.value)}
                                type='text'
                                name='text'
                                placeholder='Username...' />
                            <h1>
                                Password: <span>0lelplR</span>
                            </h1>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type='password'
                                name='text'
                                placeholder='Password...' />

                            <button onClick={login}>
                                Log In
                            </button>
                        </> : <>
                            <img src={userData?.image} />
                            <h3>
                                Username: {userData?.username}

                            </h3>
                            <h3> (userId: {userData?.id})</h3>
                            <h3>
                                Fist Name: {userData?.firstName}
                            </h3>
                            <h3>
                                Last Name: {userData?.lastName}
                            </h3>
                            <h3>
                                Email: {userData?.email}
                            </h3>
                            <h3>
                                Gender: {userData?.gender}
                            </h3>
                        </>}
                        {loggedIn ?
                            <button onClick={() => setLoggedIn(false)}>
                                Log Out
                            </button>
                            : ''}
                    </div>
                </div>
                : ''}
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
                            {loggedIn ?
                                <NavLink to="transactions">
                                    Transactions
                                </NavLink>
                                : ''}
                            <NavLink to="about">
                                About Us
                            </NavLink>
                        </nav>
                        <div>
                            <LoginDiv>
                                <div onClick={() => modalPop()} className='login'>
                                    {loggedIn ? <img className='userPic' src={userPic} alt='profile picture' /> :
                                        <img src={userIcon} alt='user' />
                                    }
                                    <UserMobile>
                                        {loggedIn ? <h4>Hello, Jeanne</h4> :
                                            <h4>
                                                Login / Register
                                            </h4>
                                        }
                                    </UserMobile>
                                </div>
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
                                        {loggedIn ?
                                            <NavLink to="transactions">
                                                Transactions
                                            </NavLink> : ''}
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
        </MainDiv >
    )
}

export default Header