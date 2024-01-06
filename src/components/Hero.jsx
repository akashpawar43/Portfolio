import heroImage from '/assets/bann.jpg'; // Import your hero image

export default function Hero() {
    return (
        <div
            className="bg-cover bg-center min-h-screen flex items-center justify-center"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="text-center max-w-7xl mx-auto p-4">
                <h1 className="text-4xl font-bold mb-4">Hi, I'm Akash Pawar</h1>
                <p className="text-lg">
                    {/* An undergraduate student pursuing BEIT, passionate about crafting digital experiences and creating innovative solutions. */}
                    Using ReactJs and NodeJs, I crafted a dynamic web application, styling it with Tailwind CSS and Bootstrap, while integrating MongoDB and MySQL for robust data management
                </p>
                <div className="text-center py-5">
                    <a href="#portfolio_section" >
                        <button href="#portfolio_section" style={{backgroundColor: "rgb(211 140 102)"}} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300">
                            <span>View Portfolio</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
