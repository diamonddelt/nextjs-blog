import Layout from '../components/Layout'
import Link from 'next/link'

const BlogPostLink = (props) => (
    <li>
        <Link as={`/p/${props.id}`} href={`/blogpost?title=${props.title}`}>
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
                <BlogPostLink id="exploring-existential-ennui" title="Exploring Existential Ennui"/>
                <BlogPostLink id="what-is-nextjs" title="What is Next.js and why should I care?"/>
            </ul>
        </p>
    </Layout>
)

export default Index