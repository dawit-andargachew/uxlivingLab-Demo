import React from "react";

const ShowStudents = ({ students }) => {
  return (
    <div className="flex relative flex-col gap-y-3">
      <p className="text-4xl text-gray-500 font-bold  ">Student List </p>
      {Object.entries(students).map(([key, student]) => (
        <div
          key={key}
          className="border p-4 rounded-md shadow-md"
        >
          <p>{key}</p>
          <h2 className="text-lg font-semibold mb-2">{student.full_name}</h2>
          <p>
            <strong>Age:</strong> {student.age}
          </p>
          <p>
            <strong>Grade:</strong> {student.grade}
          </p>
          <p>
            <strong>Subjects:</strong> {student.subjects.join(", ")}
          </p>
          <div className="mt-2">
            <strong>Address:</strong>
            <p>{`${student.address.street}, ${student.address.city}, ${student.address.state} ${student.address.zip_code}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowStudents;
