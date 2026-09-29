import { getProjects } from '@/lib/api';

export async function Services() {
    const projects = await getProjects();

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
                            backgroundImage: project.image
                                ? `url("${project.image}")`
                                : undefined,
                        }}
                    >
                        <div className="service-overlay" />

                        <div className="service-card-content">
                            <div className="service-card-top">
                                <span>
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                <span>
                                    {project.category}
                                </span>
                            </div>

                            <div className="service-card-info">
                                <h3>
                                    {project.title}
                                </h3>
                                <p>
                                    {project.description}
                                </p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="service-link"
                                >
                                    View project
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