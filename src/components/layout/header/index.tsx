import phoneIcon from '../../../assets/images/phoneIcon.png'
import envelopeIcon from '../../../assets/images/envelopeIcon.png'
import instagram from '../../../assets/images/instagram.png'
import facebook from '../../../assets/images/facebook.png'
import twitter from '../../../assets/images/twitter.png'
import youtube from '../../../assets/images/youtube.png'
import { DarkHeader, Div } from './header.styled'

const Header = () => {

    return (
        <div>
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
                                michelle.rivera@example.com
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
        </div>
    )
}

export default Header