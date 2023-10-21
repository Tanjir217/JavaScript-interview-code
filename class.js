// 1st start
class student{
   constructor(sName, sRoll){
      this.name = sName;
      this.id = sRoll;
  }   
}
  const student1 = new student("tanjir", 3);
  const student2 = new student("Shawal", 4);
  console.log(student1, student2);
// 1st end 
// 2nd start
class family{
  constructor(fName, fAge){
      this.name = fName;
      this.age = fAge;
  }
}
let member = new family("Tanjir", 16);
console.log(member);
// 2nd end
// 3rd start
class MyName{
  constructor(){
    this.name = "Tanjir"
    this.age = 23;

  }
}  
const you = new MyName();
console.log(you);
// 3rd end
// 4th start
class Father{
  constructor(){
    this.Father = "Manik Miah "
  }
}
class MyFullName  extends Father{
  constructor(name){
    super()
    this.name = name;
  }
  getName(){
    return this.name + " " +this.Father
  }
}
const Myname = new MyFullName("Tanjir");
console.log(Myname.getName());
// 4th end
// 5th start
class Parents{
  constructor(){
    this.Fathername = "miah";
  }
}
class Child extends Parents{
  
  constructor(name){
    super()
    this.childName = name;
  }
  getfullname(){
    return this.childName + " " + this.Fathername; 
  }
}
const baby = new Child("Tanjir");
console.log(baby.getfullname());
// 5th end
// 6th start
class sPrincipal{
  constructor(){
    this.PrincipalName = "Tanjir";
    this.SchoolName = "nothing"
  }
}
class sStudent extends sPrincipal{
  constructor(){
    super()
    this.studentName = "Shawal";
  }
  getFullDetails(){
    const schoolName = this.SchoolName;;
    const Sclass = "class 9";
    const studentName = this.studentName;
    const principal = "principal";
    const PrincipalName = this.PrincipalName;
    const name = `${schoolName} ${Sclass} ${studentName} ${principal} ${PrincipalName}`;
    return name

  }

}
const studentS = new sStudent();
console.log(studentS.getFullDetails());
// 6th end