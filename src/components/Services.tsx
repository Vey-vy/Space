const projects = [
    {
        title: 'Rage Script Commands',
        description: 'A Reference for script commands across Rockstar RAGE titles.',
        link: 'https://rsc.veyvy.space/',
        category: 'Web',
        image: '/images/rsc.png',
    },
];

export function Services() {
    return (
        <div className="services">
            <div className="services-header">
                <span className="services-label">My projects</span>

                <h2 className="services-title">
                    My projects
                </h2>

                <p className="services-description">
                    Check out my various projects.
                </p>
            </div>

            <div className="services-grid">
                {projects.map((project, index) => (
                    <article
                        className="service-card"
                        key={project.title}
                        style={{
                            backgroundImage: `url(${project.image})`,
                        }}
                    >
                        <div className="service-overlay" />

                        <div className="service-card-content">
                            <div className="service-card-top">
                                <span>0{index + 1}</span>
                                <span>{project.category}</span>
                            </div>

                            <div className="service-card-info">
                                <h3>{project.title}</h3>

                                <p>{project.description}</p>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="service-link"
                                >
                                    View projet
                                    <span>↗</span>
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}