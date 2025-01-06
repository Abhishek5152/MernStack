import { useState } from 'react';

const AttendanceTracker = () => {
  const [students, setStudents] = useState([
    { name: 'John', present: true },
    { name: 'Jane', present: false },
  ]);

  const markPresent = index => {
    const newStudents = [...students];
    newStudents[index].present = !newStudents[index].present;
    setStudents(newStudents);
  }

  const presentCount = students.filter(student => student.present).length;
  const absentCount = students.length - presentCount;

  return (
    <div>
      <h2>Attendance Tracker</h2>
      <p>Present: {presentCount}</p>
      <p>Absent: {absentCount}</p>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - {student.present ? 'Present' : 'Absent'}
            <button onClick={() => markPresent(index)}>
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AttendanceTracker;
