import { useState } from "react"
import { JobCard } from "./components/job-card"
import type { Filter, Job } from "./types/job"
import IconRemove from "../public/images/icon-remove.svg"

function App() {
const jobs: Job[] = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Ruby"],
      "tools": ["Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
];

  const [activeFilters, setActiveFilters] = useState<Filter[]>([]);

  const handleFilterClick = (newFilter: Filter) => {
    const filterExists = activeFilters.some(
      filter => filter.type === newFilter.type && filter.value === newFilter.value
    );

    if (filterExists) {
      setActiveFilters(activeFilters.filter(
        filter => !(filter.type === newFilter.type && filter.value === newFilter.value)
      ));
    } else {
      setActiveFilters([...activeFilters, newFilter]);
    }
  };

  const handleClearFilters = () => {
    setActiveFilters([]);
  };

  const filteredJobs = jobs.filter(job => {
    if (activeFilters.length === 0) return true;

    return activeFilters.every(filter => {
      switch (filter.type) {
        case 'role':
          return job.role === filter.value;
        case 'level':
          return job.level === filter.value;
        case 'language':
        return job.languages.includes(filter.value as typeof job.languages[number]);
        case 'tool':
        return job.tools.includes(filter.value as typeof job.tools[number]);
        default:
          return false;
      }
    });
  });

  return (
    <div className="min-h-screen bg-light-cyan-bg font-spartan text-base">
      <div className="bg-[url('/images/bg-header-mobile.svg')] md:bg-[url('/images/bg-header-desktop.svg')] bg-primary-cyan h-52 bg-cover bg-no-repeat bg-center relative z-0" />
      
      <div className={`max-w-5xl mx-auto px-6 relative z-10 flex flex-col gap-12 ${activeFilters.length > 0 ? '-mt-10' : 'pt-20' }`}>
        {activeFilters.length > 0 && (
          <div className="bg-white rounded shadow-lg p-5">
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-4">
                {activeFilters.map((filter, index) => (
                  <span 
                    key={`${filter.type}-${filter.value}-${index}`}
                    className="bg-light-cyan-filter rounded overflow-hidden flex items-center"
                  >
                    <span className="px-2 py-1 text-primary-cyan font-bold">
                      {filter.value}
                    </span>
                    <button 
                      onClick={() => handleFilterClick(filter)}
                      className="text-[30px] h-full px-2 bg-primary-cyan text-white hover:bg-dark-cyan-dark transition-colors"
                    >
                     <img src={IconRemove} alt="remove icon" />
                    </button>
                  </span>
                ))}
              </div>
              <button 
                onClick={handleClearFilters}
                className="text-dark-cyan hover:text-primary-cyan hover:underline font-bold"
              >
                Clear
              </button>
            </div>
          </div>
        )}
        
        <div className="space-y-10 md:space-y-6 pb-8">
          {filteredJobs.map(job => (
            <JobCard 
              key={job.id} 
              job={job} 
              onFilterClick={handleFilterClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App