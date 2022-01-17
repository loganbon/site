import Link from 'next/link'

export default function header() {
  return (
    <header>
      <nav className='nav-container'>
      <div className='nav'>
        <ul>
          <li>
            <Link className='nav-item' href='/' passHref>blog</Link>
          </li>
          <li>
            <Link className='nav-item' href='/about' passHref>about</Link>
          </li>
        </ul>
      </div>
      </nav>
    </header>
  )
}
