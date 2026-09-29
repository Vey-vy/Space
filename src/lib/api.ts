import {XMLParser} from 'fast-xml-parser';

const API_URL = process.env.API;
const API_KEY = process.env.API_KEY;

export interface Project {
  title: string;
  description: string;
  link: string;
  category: string;
  image?: string;
}

export async function getProjects(): Promise<Project[]> {
  if (!API_URL) {
    throw new Error('API environment variable is not defined');
  }

  const headers: HeadersInit = {
    Accept: 'application/xml, text/xml',
  };

  if (API_KEY) {
    headers['x-api-key'] = API_KEY;
  }

  const response = await fetch(`${API_URL}/project/titles`, {
    headers,
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(
        `Failed to fetch projects: ${response.status} ${response.statusText}`,
    );
  }

  const text = await response.text();
  const parsed = new XMLParser().parse(text);
  const projects = parsed.project_titles?.project ?? [];
  const list = Array.isArray(projects) ? projects : [projects];

  return list.map((project) => ({
                    title: String(project.title ?? ''),
                    description: String(project.description ?? ''),
                    link: String(project.link ?? ''),
                    category: String(project.category ?? ''),
                    image: project.image ?
                        new URL(String(project.image), API_URL).toString() :
                        undefined,
                  }));
}