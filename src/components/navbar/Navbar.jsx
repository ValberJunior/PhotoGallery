import { NavbarSection, Logo , TitleLogo} from './styles';
import LogoImg from '../../assets/logo.ico'





export default function Navbar() {
    return (
     
            <NavbarSection>

                <Logo src={LogoImg}/>
                <TitleLogo>
                    Photo Gallery
                </TitleLogo> 
               
            </NavbarSection>
     
    )
}
