import Link from 'next/link'

const Index = () => (
    <div>
        <p>
            <h2>Ryan Rasti</h2>
            Github: diamonddelt
        </p>

        <Link prefetch href="/about">
            <button style={{ fontSize: 15}}>about</button>
        </Link>
    </div>
)

export default Index