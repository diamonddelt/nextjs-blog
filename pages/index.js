import Layout from '../components/Layout'
import Link from 'next/link'

function getPosts() {
    return [
        { id: 'exploring-existential-ennui', title: 'Exploring Existential Ennui' },
        { id: 'what-is-nextjs', title: 'What is Next.js and why should I care?'},
    ]
}

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
                { getPosts().map((blogpost) => (
                    <li key={blogpost.id}>
                        <Link as={`/p/${blogpost.id}`} href={`/blogpost?title=${blogpost.title}`}>
                            <a>{blogpost.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <style jsx>{`
                h1, a {
                    font-family: "Sans-serif";
                }

                ul {
                    padding: 1.5;
                }

                li {
                    list-style: none;
                    margin: 3px 0;
                }

                a {
                    text-decoration: none;
                    color: green;
                }

                a:hover {
                    opacity: 0.4;
                }
            `}</style>
        </p>
    </Layout>
)

export default Index