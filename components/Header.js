import Link from 'next/link'

const linkStyle = {
    marginRight: 20
}

const Header = () => (
    <div>
        <Link prefetch href="/">
            <button style={linkStyle}>home</button>
        </Link>
        <Link prefetch href="/about">
            <button style={linkStyle}>about</button>
        </Link>
    </div>
)

export default Header