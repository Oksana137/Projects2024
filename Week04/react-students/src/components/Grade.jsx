const getGradeByGPA = (gpa) => {
  let grade = "";

  if (gpa > 96) {
    grade = "A+";
  } else if (gpa >= 93 && gpa <= 96) {
    grade = "A";
  } else if (gpa >= 90 && gpa < 93) {
    grade = "A-";
  } else if (gpa >= 87 && gpa <= 89) {
    grade = "B+";
  } else if (gpa >= 83 && gpa <= 86) {
    grade = "B";
  } else if (gpa >= 80 && gpa <= 82) {
    grade = "B-";
  } else if (gpa >= 77 && gpa <= 79) {
    grade = "C+";
  } else if (gpa >= 73 && gpa <= 76) {
    grade = "C";
  } else if (gpa >= 70 && gpa <= 72) {
    grade = "C-";
  } else if (gpa >= 67 && gpa <= 69) {
    grade = "D+";
  } else if (gpa >= 63 && gpa <= 66) {
    grade = "D";
  } else if (gpa >= 60 && gpa <= 62) {
    grade = "D-";
  } else if (gpa <= 59) {
    grade = "F";
  }

  return grade;
};

const Grade = ({ academicStatus }) => {
  return (
    <div>
      <div>Grade: {getGradeByGPA(academicStatus.gpa)}</div>
      <div>
        Graduate: {academicStatus.graduate ? "already graduated" : "actively enroled"}
      </div>
    </div>
  );
};

export default Grade;
