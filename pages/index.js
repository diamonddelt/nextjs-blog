import Link from 'next/link'

const Index = () => (
    <div>
        <p>
            <h2>Ryan Rasti</h2>
            Github: diamonddelt
        </p>

        <Link href="/about">
            <a style={{ fontSize: 20}}>about</a>
        </Link>
    </div>
)

export default Index