import Link from 'next/link'

export default () => (
    <div>
        <ul>
            <li>Developer</li>
            <li>DevOps Engineer</li>
            <li>Fitness Enthusiast</li>
        </ul>

        <Link prefetch href="/index">
            <button style={{ fontSize: 15}}>home</button>
        </Link>
    </div>
)