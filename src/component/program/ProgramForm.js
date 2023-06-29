// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { selectAllAcademicyears } from '../academicyear/academicyearSlices';

// function ProgramForm() {

//     const academicyears = useSelector(selectAllAcademicyears)
//     console.log(academicyears)

//   const [selectedyearname, setSelectedYearId] = useState('');

//   useEffect(() => {
//     const selectedyearname = localStorage.getItem('selectedyearname');
//     setSelectedYearId(parseInt(selectedyearname));
//   }, []);

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     localStorage.setItem('selectedyearname', selectedyearname.toString());
//     // Other form handling logic
//     alert('Form submitted successfully!');
//   };

//   return (
//     <div>
//       <h1>Program Form</h1>
//       <form onSubmit={handleFormSubmit}>
//         <label htmlFor="academic-year-select">Select Academic Year:</label>
//         <select
//           id="academic-year-select"
//           value={selectedyearname || ''}
//           onChange={(event) => setSelectedYearId(parseInt(event.target.value))}
//         >
//           <option value="">-- Select an academic year --</option>
//           {academicyears.map((year) => (
//             <option key={year.id} value={year.id} disabled={selectedyearname === year.id}>
//               {year.name}
//             </option>
//           ))}
          
//         </select>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default ProgramForm;

// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { selectAllAcademicyears } from '../academicyear/academicyearSlices';

// function ProgramForm() {
//   const academicYears = useSelector(selectAllAcademicyears)
//   const [selectedYearIds, setSelectedYearIds] = useState([]);

//   useEffect(() => {
//     const storedYearIds = localStorage.getItem('selectedYearIds');
//     if (storedYearIds) {
//       setSelectedYearIds(JSON.parse(storedYearIds));
//     }
//   }, []);

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     localStorage.setItem('selectedYearIds', JSON.stringify(selectedYearIds));
//     // Other form handling logic
//     alert('Form submitted successfully!');
//   };

//   const handleYearSelection = (event, yearId) => {
//     if (event.target.checked) {
//       setSelectedYearIds((prevSelectedYearIds) => [...prevSelectedYearIds, yearId]);
//     } else {
//       setSelectedYearIds((prevSelectedYearIds) => prevSelectedYearIds.filter((id) => id !== yearId));
//     }
//   };

//   return (
//     <div>
//       <h1>Program Form</h1>
//       <form onSubmit={handleFormSubmit}>
//         <label>Select Academic Years:</label>
//         {academicYears.map((year) => (
//           <div key={year.id}>
//             <input
//               type="checkbox"
//               id={year.id}
//               value={year.id}
//               checked={selectedYearIds.includes(year.id)}
//               onChange={(event) => handleYearSelection(event, year.id)}
//               disabled={selectedYearIds.includes(year.id)}
//             />
//             <label htmlFor={year.id}>{year.name}</label>
//           </div>
//         ))}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default ProgramForm;


import React, { useState } from 'react';

const AcademicYearSelector = () => {
  const [selectedYears, setSelectedYears] = useState([]);
  const academicYears = ['2020-2021', '2021-2022', '2022-2023', '2023-2024'];

  const handleYearChange = (event) => {
    const selectedYear = event.target.value;
    setSelectedYears((prevSelectedYears) => [...prevSelectedYears, selectedYear]);
  };

  return (
    <div>
      <label htmlFor="academicYear">Select Academic Years:</label>
      <select
        id="academicYear"
        onChange={handleYearChange}
        disabled={selectedYears.length === academicYears.length}
      >
        <option value="">-- Select --</option>
        {academicYears.map((year) => (
          <option
            key={year}
            value={year}
            disabled={selectedYears.includes(year)}
          >
            {year}
          </option>
        ))}
      </select>
      <div>
        <h3>Selected Academic Years:</h3>
        {selectedYears.length === 0 ? (
          <p>No years selected</p>
        ) : (
          <ul>
            {selectedYears.map((year) => (
              <li key={year}>{year}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AcademicYearSelector;




