import Layout from '../components/Layout';
import Link from 'next/link';


const Index = () => {
    return (
    	<body style={{backgroundcolor:'black'}}>
        <Layout>

            <h2>Index page</h2>
            <Link href="/signup">
                <a>Signup</a>
            </Link>

            <p style={{color:'tan'}}>
          Tutorials and How-to guides are probably the simplest type of blog post you can work on. They are easy because they involve you talking about things you are already familiar with such as your product or service.

The most important thing when it comes to how-to guides is to break down your tutorial into the smallest steps and into the simplest terms. Don’t assume your readers know what they’re doing — this is a tutorial, remember?

Think about your recent work, and you can probably find some great ideas for you to write a tutorial on. Our co-founder built the largest WordPress resource, WPBeginner, by following this exact same principle.</p>

        </Layout>
        </body>
    );
};

export default Index;