import './NavBarOptions.css';

export default function NavBarOptions() {
    return(
        <div className="NavBarOptions">
            <a href="https://www.kdagiitkgp.org/events">Events</a>
            <a href="https://www.kdagiitkgp.org/resources">Resources</a>
            <a href="https://www.kdagiitkgp.org/blog">Blog</a>
            <a href="https://www.kdagiitkgp.org/team">Team</a>
            <a href="https://www.kdagiitkgp.org/alumni">Alumni</a>
            <a href="https://www.kdagiitkgp.org/forum"><img src="https://www.kdagiitkgp.org/static/media/forum.826e31f2b606e29ed51f.png" alt="forum" height={25}/></a>
            <a href="https://www.kdagiitkgp.org/auth"><img src="https://www.kdagiitkgp.org/static/media/register.9c5d4ef9aad8b3f12160.png" alt="auth" height={25}/></a>
        </div>
    )
}