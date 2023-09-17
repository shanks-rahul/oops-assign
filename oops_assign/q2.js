class Student{
    constructor(name,batch){
        this.name= name;
        this.batch = batch ;
        this.enrolledCourses=[];
    }

    enrollInCourse(coursename){
        this.enrolledCourses.push ( coursename);
    }

    showEnrolledCourses(){
        this.enrolledCourses.forEach((course)=>{
            console.log(`${this.name} is currently enrolled in ${course}`);
        });
    }

}
let i=0;
class Admission{
    constructor() {
        this.students=[];
    }
    enrollstudent(Student){
        this.students.push(Student);
        console.log(`${Student.name} has been enrolled`);
    }

    assignCourse(name,course){
        const student=new Student(name,course);
        
        
        try{
         if(this.students[i].name==student.name){
            i++;
             student.enrollInCourse(course);
             console.log(`${student.name} has been enrolled to ${course}`);
          }
        }catch{
          
          console.log("No such student found");
          
        }
    }
    
    showEnrolledStudents(){
        this.students.forEach((student)=>{
            console.log(`${student.name} (${student.batch})`);
        })
    }
}

const ofiice=new Admission();
const s1=new Student("rahul","pw");
const s2=new Student("john","pw skills");

ofiice.enrollstudent(s1);
ofiice.enrollstudent(s2);
ofiice.assignCourse("rahul","FSD");
ofiice.assignCourse("john","data");
ofiice.showEnrolledStudents();


