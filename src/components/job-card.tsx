import type { JobCardProps, FilterType, FilterValue } from "../types/job"

export const JobCard: React.FC<JobCardProps> = ({ job, onFilterClick }) => {
  const handleFilterClick = (value: FilterValue, type: FilterType) => {
    onFilterClick?.({ type, value });
  };

  return (
    <div 
      className={`
        bg-white rounded shadow-lg p-6 
        ${job.featured ? 'border-l-4 border-primary-cyan' : ''} 
        font-spartan text-base relative
      `}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-shrink-0 -mt-12 md:mt-0">
          <img 
            src={job.logo} 
            alt={`${job.company} logo`} 
            className="w-20 h-20" 
          />
        </div>

        <div className="flex-grow space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-primary-cyan font-bold">{job.company}</span>
            {job.new && (
              <span className="bg-primary-cyan text-white pt-1 px-2 py-0 rounded-full text-sm font-medium">
                NEW!
              </span>
            )}
            {job.featured && (
              <span className="bg-dark-cyan-dark pt-1 text-white px-2 py-0 rounded-full text-sm font-medium">
                FEATURED
              </span>
            )}
          </div>

          <h2 className="text-xl font-bold text-dark-cyan-dark hover:text-primary-cyan cursor-pointer">
            {job.position}
          </h2>

          <div className="flex items-center gap-4 text-dark-cyan">
            <span>{job.postedAt}</span>
            <span className="w-1 h-1 bg-dark-cyan rounded-full"></span>
            <span>{job.contract}</span>
            <span className="w-1 h-1 bg-dark-cyan rounded-full"></span>
            <span>{job.location}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-4 border-t mt-4 md:border-t-0 md:pt-0 md:mt-0 md:justify-end overflow-x-auto">
          <button
            onClick={() => handleFilterClick(job.role, 'role')}
            className="bg-light-cyan-filter text-primary-cyan font-bold px-4 py-2 pt-3 rounded hover:bg-primary-cyan hover:text-white transition-colors"
          >
            {job.role}
          </button>
          <button
            onClick={() => handleFilterClick(job.level, 'level')}
            className="bg-light-cyan-filter text-primary-cyan font-bold px-4 py-2 pt-3 rounded hover:bg-primary-cyan hover:text-white transition-colors"
          >
            {job.level}
          </button>
          {job.languages.map(language => (
            <button
              key={language}
              onClick={() => handleFilterClick(language, 'language')}
              className="bg-light-cyan-filter text-primary-cyan font-bold px-4 py-2 pt-3 rounded hover:bg-primary-cyan hover:text-white transition-colors"
            >
              {language}
            </button>
          ))}
          {job.tools.map(tool => (
            <button
              key={tool}
              onClick={() => handleFilterClick(tool, 'tool')}
              className="bg-light-cyan-filter text-primary-cyan font-bold px-4 py-2 rounded hover:bg-primary-cyan hover:text-white transition-colors"
            >
              {tool}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};