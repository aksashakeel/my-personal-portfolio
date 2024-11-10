'use client'
import Image from 'next/image';
import { HeaderItems } from '@/constants/constants';

export default function Projects() {
  const projects = [
    { id: 1, src: '/images/project1.jpg', title: 'Project 1', link: 'https://my-project-six-dusky.vercel.app/' },
    { id: 2, src: '/images/project2.jpg', title: 'Project 2', link: 'https://one-page-website-ecru.vercel.app/' },
    { id: 3, src: '/images/project3.jpg', title: 'Project 3', link: 'https://interior-website-omega.vercel.app/' },
    { id: 4, src: '/images/project4.jpg', title: 'Project 4', link: 'https://hackathone-milestone-5-puce.vercel.app/' },
    { id: 5, src: '/images/project5.jpg', title: 'Project 5', link: 'https://my-login-form-five.vercel.app/' },
    { id: 6, src: '/images/project6.jpg', title: 'Project 6', link: 'https://hackathone-milestone-1-2-phi.vercel.app/' },
  ];

  return (
    <section id={HeaderItems.projects.page} className="py-16 pt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-950 to-purple-700">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="relative bg-gray-300 shadow-lg rounded-lg overflow-hidden">
              <Image
                src={project.src}
                alt={project.title}
                width={500}
                height={300}
                className="object-cover w-full h-56"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
