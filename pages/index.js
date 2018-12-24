import Layout from '../components/Layout'
import Link from 'next/link'

const BlogPostLink = (props) => (
    <li>
        <Link href={`/blogpost?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

const Index = () => (
    <Layout>
        <p>
            <h2>Ryan Rasti</h2>
            Github: diamonddelt

            <h3>Posts</h3>
            <ul>
                <BlogPostLink title="Exploring Existential Ennui"/>
                <BlogPostLink title="What is Next.js and why should I care?"/>
            </ul>
        </p>
    </Layout>
)

export default Index