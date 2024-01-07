import Footer from './Footer';
import Form from './Form';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Skills from './Skills';

function Home() {

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            {/* Hero Section */}
            <section>
                <Hero />
            </section>

            {/* Portfolio Section */}
            <section>
                <Portfolio />
            </section>

            {/* Skills Section */}
            <section className=' bg-gray-800'>
                <Skills />
            </section>

            {/* Form Section */}
            <section>
                <Form />
            </section>

            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default Home;
