import React from 'react';

function Portfolio() {
    const projects = [
        {
            src: "tech.jpg",
            title: "Technical News",
            git: "TechnicalNews",
            description: 'An e-commerce platform built with React and Node.js. Allows users to browse products, add them to cart, and make purchases.',
            technologies: ['React.js', 'Node.js', 'Tailwind CSS', 'React-Router'],
        },
        {
            src: "epic.webp",
            title: "Epic Clone",
            git: "epic-clone",
            description: 'An e-commerce platform built with React and Node.js. Allows users to browse products, add them to cart, and make purchases.',
            technologies: ['Node.js', 'HBS', 'Express', 'MongoDB', 'Bootstrap'],
        },
        {
            src: "bms.webp",
            title: "BookMyShow Clone",
            git: "BookMyShow-clone",
            description: 'A travel blog website created using Next.js and Tailwind CSS. Allows users to read and publish travel stories.',
            technologies: ['Node.js', 'HBS', 'Express', 'MongoDB', 'CSS', 'JavaScript'],
        },
        {
            src: "social.jpg",
            title: "Homies",
            git: "Social-media",
            description: 'A travel blog website created using Next.js and Tailwind CSS. Allows users to read and publish travel stories.',
            technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'React-Router'],
        },
        {
            src: "stock.jpg",
            title: "Stocks Update",
            git: "essentially-task",
            description: 'A task management application built with Vue.js and Vuex. Users can create, update, and delete tasks.',
            technologies: ['React.js', 'Node.js', 'JavaScript', 'Bootstrap', 'React-Router'],
        },
        {
            src: "venus.webp",
            title: "Venus International",
            description: 'A task management application built with Vue.js and Vuex. Users can create, update, and delete tasks.',
            technologies: ['React.js', 'Node.js', 'JavaScript', 'Bootstrap', 'React-Router'],
        },
    ];

    return (
        <>
            <div className="bg-gray-900 text-white " id='portfolio_section'>
                <div className="max-w-7xl mx-auto py-8 px-4">
                    <h1 className="text-4xl font-bold mb-8">Portfolio</h1>

                    {/* Project Cards */}
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                        {projects.map((project, index) => (
                            <a key={index} target="_blank" rel="noopener noreferrer" aria-label="project" href={`https://github.com/akashpawar43/${project.git}`}>
                                <div className="bg-gray-800 p-5 h-full rounded-lg shadow-md">
                                    <img src={`./assets/${project.src}`} alt={project.title} className="mb-4 rounded-lg w-full bg-no-repeat h-56" />
                                    <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    <div>
                                        <p className="text-gray-400 font-semibold mb-2">Technologies Used:</p>
                                        <ul className="flex flex-wrap">
                                            {project.technologies.map((tech, idx) => (
                                                <li key={idx} className="bg-gray-600 text-gray-300 rounded-full py-1 px-3 mr-2 mb-2">
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div >
        </>
    );
}

export default Portfolio;
