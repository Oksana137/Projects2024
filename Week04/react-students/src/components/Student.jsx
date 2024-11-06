import Grade from "./Grade";

const Student = ({ studentData }) => {
  return (
    <div className="bg-slate-100 p-8 text-lg text-black rounded-2xl">
      <img src={studentData.picture} alt="The photo of student" />
      <h2 className="text-2xl font-semibold text-[#4e6b9a] py-2">
        Information about Student
      </h2>
      <ul>
        <li>First Name: {studentData.firstName}</li>
        <li>Last Name: {studentData.lastName}</li>
        <li>Age: {studentData.age}</li>
        <li>Course: {studentData.course}</li>
        <li>City: {studentData.city}</li>
      </ul>
      <Grade
        academicStatus={{
          gpa: studentData.gpa,
          graduate: studentData.graduate,
        }}
      />
    </div>
  );
};

export default Student;
