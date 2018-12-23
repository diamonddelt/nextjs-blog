import Link from 'next/link'

export default () => (
    <div>
        <ul>
            <li>Developer</li>
            <li>DevOps Engineer</li>
            <li>Fitness Enthusiast</li>
        </ul>

        <Link href="/index">
            <a style={{ fontSize: 20}}>home</a>
        </Link>
    </div>
)