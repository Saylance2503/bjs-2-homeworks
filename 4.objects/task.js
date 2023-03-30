function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (!this.marks) {
    return;
  }
  this.marks = [...marks];
  console.log(this.marks);
};

Student.prototype.getAverage = function () {
  if (!this.marks || this.marks == 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < this.marks.length; i += 1) {
    sum += this.marks[i];
  }
  return sum / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
