import NavBarIcon from './NavBarIcon';
import NavBarOptions from './NavBarOptions';
import './NavBar.css';

export default function NavBar() {
    return(
        <div className="NavBar">
            <NavBarIcon></NavBarIcon>
            <NavBarOptions/>
        </div>
    )
}