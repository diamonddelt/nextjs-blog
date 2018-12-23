import Link from 'next/link'

const buttonStyle = {
    marginRight: 20
}

const Header = () => (
    <div>
        <Link prefetch href="/">
            <button style={buttonStyle}>home</button>
        </Link>
        <Link prefetch href="/about">
            <button style={buttonStyle}>about</button>
        </Link>
    </div>
)

export default Header