import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__left'>
                <MenuIcon />
                <img
                    className='header__logo'
                    src='https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/04/youtubelogo2_1ab0df5df14a475f3da3d03210491e64.jpg'
                    alt='youtube-logo'
                />
            </div>

            <div className='header__input'>
                <input type='text' placeholder='Search' />
                <SearchIcon className='header__inputButton' />
            </div>

            <div className='header__icons'>
                <VideoCallIcon className='header__icon' />
                <AppsIcon className='header__icon' />
                <NotificationsIcon className='header__icon' />
                <Avatar
                    src='https://yt3.ggpht.com/ytc/AAUvwnjDg-buPliGA3RW5BQqnL3W-x_G0f493xhc9xOebw=s176-c-k-c0x00ffffff-no-rj-mo'
                    alt='avatar'
                />
            </div>
        </div>
    );
};

export default Header;
