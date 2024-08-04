import logo from '../../image/logo.svg';
import './Header.scss';
import Navigation from './Navigation';

function Header() {
  const navData = [
    {
      link: '#', name: 'home', children: [
        { link: '#', name: 'link1' },
        { link: '#', name: 'link1' },
        { link: '#', name: 'link1' }
      ]
    },
    {
      link: '#', name: 'about', children: [
        { link: '#', name: 'link1' },
        { link: '#', name: 'link1' },
        { link: '#', name: 'link1' }
      ]
    },
    {
      link: '#', name: 'services', children: [
        { link: '#', name: 'link1' },
        { link: '#', name: 'link1' },
        { link: '#', name: 'link1' }
      ]
    }
  ]

  return (
    <header>
      <div className='container'>
        <div className='header-wrap'>
          <img src={logo} alt='logo' />
          <Navigation navData={navData} />
          <a href="/">Call to action</a>
        </div>
      </div>
    </header>
  )
}

export default Header