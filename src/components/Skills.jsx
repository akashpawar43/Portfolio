import React from 'react';

export default function Skills() {
    const skills = [
        { name: 'React', level: '70%' },
        { name: 'JavaScript', level: '65%' },
        { name: 'HTML/CSS', level: '80%' },
        { name: 'UI/UX Design', level: '85%' },
        { name: 'Tailwind CSS', level: '85%' },
        { name: 'NodeJS', level: '75%' },
        { name: 'Database', level: '70%' },
        { name: 'HBS', level: '80%' },
        // Add more skills as needed
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            {/* Skills Section with Graphical Representation */}
            <h2 className="text-3xl font-semibold mb-5">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {skills.map((skill, i) => (
                    <div key={i} className="bg-gray-900 p-4 rounded-md">
                        <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                        <div className="flex items-center">
                            <div className=" w-4/5 bg-blue-500 h-4 rounded-full mr-2">
                                <div className="bg-blue-700 h-4 rounded-full" style={{ width: skill.level }}></div>
                            </div>
                            <span>{skill.level}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
