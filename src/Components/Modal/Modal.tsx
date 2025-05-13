
import React from "react";

const ProjectModal = ({ project, visible, onClose }: any) => {
  if (!visible || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-2 sm:p-4">
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] max-h-[90vh] overflow-y-auto relative">
        <div className="border-2 border-[#854ce6] rounded-md p-4 sm:p-6 bg-[#1c1c27] flex flex-col gap-4 text-[#84858a]">
          {/* Close Button */}
          <button
            className="absolute top-2 right-3 text-white text-xl font-bold"
            onClick={onClose}
          >
            X
          </button>

          {/* Image */}
          {project.image && (
            <div className="h-[200px] sm:h-[250px] md:h-[280px]">
              <img
                src={project.image}
                alt="Project"
                className="w-full h-full object-cover rounded"
              />
            </div>
          )}

          {/* Project Title */}
          <div className="text-center font-[700] text-lg sm:text-xl">
            {project.projectName}
          </div>

          {/* Description */}
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="text-[16px] sm:text-[18px] font-[700] sm:w-[150px]">
              Description
            </div>
            <div className="flex-1">{project.description}</div>
          </div>

          {/* Contribution */}
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="text-[16px] sm:text-[18px] font-[700] sm:w-[150px]">
              Contribution
            </div>
            <div className="flex-1">{project.contribution}</div>
          </div>

          {/* Skills */}
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="text-[16px] sm:text-[18px] font-[700] sm:w-[150px]">
              Skills
            </div>
            <div className="flex flex-wrap gap-2">
              {project.Skills?.map((val: any, index: any) => (
                <div
                  key={index}
                  className="px-2 py-1 rounded-md border border-[#854ce6] text-[12px]"
                >
                  {val}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProjectModal);

