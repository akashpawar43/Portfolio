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

            <section>
                <Portfolio />
            </section>

            {/* Content Section */}
            <section className=' bg-gray-800'>
                <Skills />
            </section>

            <section>
                <Form />
            </section>
        </div>
    );
}

export default Home;
