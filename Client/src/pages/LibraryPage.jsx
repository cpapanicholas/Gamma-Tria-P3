import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PUBLIC_WORKOUTS } from '../../utils/queries';
import { QUERY_PUBLIC_PROGRAMS } from '../../utils/queries';
import ProgramCard from '../components/ProgramCard';
import WorkoutCard from '../components/WorkoutCard';


const SearchBar = () => {
  // const workouts = []
  // const programs = []
  const [workouts, setWorkouts] = useState([])
  const [programs, setPrograms] = useState([])


  const { loading: loadingFirst, error: errorFirst, data: dataFirst } = useQuery(QUERY_PUBLIC_WORKOUTS, {
    variables: { originalId: "" },
  }); 
  console.log(loadingFirst);
  console.log(dataFirst);
  if (dataFirst) {
    workouts.push(dataFirst.getAllPublicWorkouts)
    console.log(workouts[0]);
  }
 
  const { loading: loadingSecond, error: errorSecond, data: dataSecond } = useQuery(QUERY_PUBLIC_PROGRAMS); 
  console.log(loadingSecond);
  console.log(dataSecond);
  console.error(errorSecond)
  if (dataSecond) {
    programs.push(dataSecond.getAllPublicWorkouts)
    console.log(dataSecond);
  }

  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); // Default filter value

  const handleSearch = () => {
    // Perform the search logic here using 'searchTerm' and 'filter'
    // console.log('Searching for:', searchTerm, 'with filter:', filter);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <>
    <header>
      <div className="">
        <h4 className="card-header bg-dark text-light p-2">Library</h4>
      </div>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-8 col-md-8 mb-2">
            <div className="card mb-2">
              <div className="card-body">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-control"
                  />
                  <div className="input-group-append">
                    <button onClick={handleSearch} className="btn btn-primary">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 col-md-4 mb-2">
            <div className="card mb-2">
              <div className="card-body">
                <div className="input-group">
                  <label className="input-group-text" htmlFor="filterDropdown">
                    Filter:
                  </label>
                  <select
                    id="filterDropdown"
                    value={filter}
                    onChange={(e) => handleFilterChange(e.target.value)}
                    className="form-control"
                  >
                    <option value="all">All</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* {programs[0] ? programs[0].map((program) => <ProgramCard program={program}/>) : ''} */}
    {workouts[0] ? workouts[0].map((workout) => <WorkoutCard workout={workout}/>) : ''}
   
    </>
  );
};

export default SearchBar;
