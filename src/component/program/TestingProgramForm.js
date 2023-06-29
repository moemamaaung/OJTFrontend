import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllAcademicyears } from '../academicyear/academicyearSlices';

const TestingProgramForm = () => {
  const [selectedYear, setSelectedYear] = useState('');
  const [createdYears, setCreatedYears] = useState([]);

  const academicYears = useSelector(selectAllAcademicyears)
  console.log(academicYears)

  // const academicYears = [
  //   { id: 1, value: '2021-2022' },
  //   { id: 2, value: '2022-2023' },
  //   { id: 3, value: '2023-2024' },
  // ]; // Replace with your list of academic years

  const handleYearSelect = (event) => {
    const yearId = parseInt(event.target.value);
    const yearValue = academicYears.find((year) => year.id === yearId)?.value || '';
    setSelectedYear(yearValue);
  };

  const handleCreateYear = (event) => {
    if (selectedYear !== '') {
      setCreatedYears([...createdYears, selectedYear]);
      setSelectedYear('');
    }
  };

  return (
    <div>





      <label htmlFor="academicYear">Select Academic Year:</label>
      <select id="academicYear" value={selectedYear} onChange={handleYearSelect}>
        <option value="">Select Year</option>
        {academicYears.map((year) => (
          <option key={year.id} value={year.id} disabled={createdYears.includes(year.value)}>
            {year.value}
          </option>
        ))}
      </select>

      <button onClick={handleCreateYear} disabled={!selectedYear}>
        Create
      </button>

      <h2>Created Academic Years:</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {createdYears.map((year, index) => (
            <tr key={index}>
              <td>{year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestingProgramForm;
