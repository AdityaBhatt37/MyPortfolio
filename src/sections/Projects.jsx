import React from 'react';
import { myProjects } from '../constants/index';

const Projects = () => {
  return (
    <section className="c-space my-20" id="work">
      <p className="head-text">My Selected Work</p>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-12">
        {myProjects.map((project, index) => (
          <div
            key={index}
            className="bg-black-100 border border-black-300 rounded-xl shadow-lg overflow-hidden p-4 flex flex-col gap-4 hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Project Image */}
            <img
              src={project.displayImage}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md"
            />

            {/* Title and Logo */}
            <div className="flex items-center gap-3">
              <div
                className="p-2 rounded-lg backdrop-filter backdrop-blur-3xl"
                style={project.logoStyle}
              >
                <img src={project.logo} alt="logo" className="w-8 h-8" />
              </div>
              <h3 className="text-white text-lg font-semibold">{project.title}</h3>
            </div>

            {/* Description */}
            <p className="text-white-600 text-sm">{project.desc}</p>

            {/* Tags and Link */}
            <div className="flex justify-between items-center mt-auto flex-wrap gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                {project.tags.map((tag, tagIndex) => (
                  <img
                    key={tagIndex}
                    src={tag.path}
                    alt={tag.name}
                    className="w-5 h-5"
                  />
                ))}
              </div>

              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-white-600 text-sm hover:underline"
              >
                <span>Live</span>
                <img src="assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
