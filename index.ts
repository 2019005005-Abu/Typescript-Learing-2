// import { myname as myFullName,name} from './dist/index2';

//union type
let userId:(string |number|boolean);
userId="01313218256";
userId=6353434363;
userId=true;

function displayUserInfo(userId){
   console.log(userId);
}
displayUserInfo("101");
displayUserInfo(53343);
displayUserInfo(false);
function display2(id:string|number,sytemId:number|string){
  console.log("My id is "+id);
  console.log("My System Id Is"+sytemId);
}
console.log(display2("208373535",2019005005));
console.log(display2(2019006006,"01313218256"));


//array->Data->Type

let usersName:string[];
let MyDigit:Array<Number>
let MyBiograpgy:Array<String>
usersName=['Rifat','Rimon','Pinky'];
console.log("The array is"+usersName);
MyDigit=[1,2,3,4,5,6,7,8];
MyBiograpgy=["Abu Al Shahriar Rifat","BSC in Information Tecnology","University of Sharda","Software Enginner"]
console.log(MyDigit);
console.log(MyBiograpgy);

let multipleTypeArray:(string|number)[];
multipleTypeArray=[1,2,3,4,"Rifat","Software Engineer"];
console.log(multipleTypeArray);

let arraySortingIs:string[];
arraySortingIs=["Rifat","Amin","Kifayet"];
arraySortingIs.sort();
console.log(arraySortingIs);

//mixedData-Key,value
//tuple
let use:[number,string];
use=[101,"Abu Al Shahriar Rifat"];
console.log(typeof(use));
console.log(use);
console.log(use.push(104,"Bangladesh"));
console.log(use);

//enum Type
//1.Enum Types:numeric,string,heterogenous
enum userRequestType{
    getData=1,
    ReadData=3,
    DeleteData=4,
    SaveData=5
}
console.log(userRequestType);

enum RequestType1{
    getData1=1,
    ReadData1=2,
    DeleteData1=3,
    SaveData1=4,
    ManagingData='MANAGE_DATA',
    deleteData='DELETE_DATA'
}

console.log(RequestType1.getData1);
console.log(RequestType1['ReadData1']);  


//enum Mixed
enum heterogenousMixData{
    readData=1,
    DeleteData=2,
    id=2019005005,
    name='Abu Al Shahriar Rifat',
    university="University Of Sharda"
}
console.log(heterogenousMixData['name']);
console.log(heterogenousMixData['university']);

//any type
let userNameIs:any;
userNameIs='Abu Al Shahriar Rifat';
userNameIs=2019005005;
userNameIs=true;
userNameIs=false;


//object Type
let user1:{
    name:string,
    userId:number
}
user1={
    name:"Abu Al Shahriar Rifat",
    userId:201906656,
}

let fullUser:object;
fullUser={
    name:"Abu Al Shahriar Rifat",
    System_Id:2019005005,
}
console.log(fullUser);

//array of Object
let ArrayOFObject:object[];
ArrayOFObject=[
    {
     name:"Abu Al Shahriar Rifat" ,
     SystemID:2019005005,
     University:"University Of Sharda",
     Profession:"Software Enginner" 
    },
    {
     name:"Kifayet Nauajesh Keya",
     SystemID:2019374645,
     University:"Boguare Nursing Institute",
     Profession:"Nursing"
    }
]
console.log(ArrayOFObject);
console.log(ArrayOFObject[0].name);

//creating a array
let usersArr=[];
let userObject:{username:string,usedId:number}
userObject={
    username:"Abu Al Shahriar Rifat",
    usedId:2019005005
}
usersArr.push(userObject);
console.log(usersArr)


var makingArr=[];
var object1:{
    name:string,
    university:string,
    profession:string,
    qualification:string,
}
object1={
    name:"Abu Al Shahriar Rifat",
    university:"University Of Sharda",
    profession:"Software Enginnering",
    qualification:"BSC in Information Tecnology"
}
var pusingInformationinobject=makingArr.push(object1);
console.log(object1);

type UserType={
    username:string,
    userID:number,
}

let user_4:UserType;
user_4={
    username:'Abu Al Shahriar Rifat',
    userID:2019009373645,
}
console.log(user_4.username);
console.log(user_4.userID);

type RequestType="GET"|"POST";
let getRequest:RequestType;
getRequest='GET';

function requestHandaler(requestType:RequestType){
   console.log(requestType)
}
requestHandaler(getRequest);

//class
class UsersClass{
    //properties,methods,constructor
    userName:string
    userAge:number
    constructor(userName:string,userAge:number){
     this.userName=userName;
     this.userAge=userAge;
    }
    display(){
        console.log(`User-Name:${this.userName} 
        User-Age:${this.userAge}`)
    }
}


//inheritence in Typescript
 class UserClass3 extends UsersClass{
  adddress:string;phoneNumber:number;studentId:number;
constructor(userName:string,userAge:number,address:string,
phoneNumber:number,studentId:number)
{
super(userName,userAge);
   this.adddress=address;
   this.phoneNumber=phoneNumber;
   this.studentId=studentId;
  }
  displsy2(){
    console.log(`My Address:${this.adddress} ,
    phone-Number:${this.phoneNumber}
    Student-id:${this.studentId}`)
  }
 }
 const inheritance_1=new UserClass3
 ('rifatdiu',24,'Mogbazar',01313218256,2019005005);
 console.log(inheritance_1);
 console.log(inheritance_1.display());
 console.log(inheritance_1.displsy2());

 //abstraction
abstract class firstAbstractionClass {
    firstName:string;
     lastName:string;
     fullName:string;
     SystemId:number;
     university:string;
    constructor(firstName:string,lastName:string,fullName:string,
        SystemId:number,university:string) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.fullName=fullName;
        this.SystemId=SystemId;
        this.university=university;
    }
    dispalyAllInformation():void{
        console.log(`My fitst-Name :${this.firstName} 
        last-Name:${this.lastName} Full-Name:${this.fullName}
         System-Id:${this.SystemId} and University:${this.university}`);
    }

    abstract dispalyAllInformation():void

}

// const profile1=new firstAbstractionClass('Abu Al shahriar','Rifat',
// 'Abu Al Shahriar Rifat',2019005005,'University Of sharda');
class firstAbstractionClass11 {
    firstName:string;
     lastName:string;
     fullName:string;
     SystemId:number;
     university:string;

    constructor(firstName:string,lastName:string,fullName:string,
        SystemId:number,university:string) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.fullName=fullName;
        this.SystemId=SystemId;
        this.university=university;
    }
    dispalyAllInformation():void{
        console.log(`My fitst-Name :${this.firstName} 
        last-Name:${this.lastName} Full-Name:${this.fullName}
         System-Id:${this.SystemId} and University:${this.university}`);
    }

}

class firstAbstractionClass12 extends firstAbstractionClass11{
  protected profession:string;
  private Job_expereience:string;
  readonly text:string;
  constructor(firstName:string,lastName:string,fullName:string,
    SystemId:number,university:string,profession:string,Job_expereience:string,text:string){
        super(firstName,lastName,fullName,SystemId,university);
        this.profession=profession;
        this.Job_expereience=Job_expereience;
        this.text=text;
    }
    display3(){
        console.log(`My profession:${this.profession} and Job-Experience:${this.Job_expereience}`)
    }
    //setter
    setJobExepereienceDetails(Job_expereience:string):void{
        this.Job_expereience=Job_expereience;
      }
      //getter
      getStudentExpereiece=():string=>{
        return this.Job_expereience;
      }
}


const ob2=new firstAbstractionClass12('Abu Al','Shahriar','Abu Al Shahriar Rifat',2019005005,
'University of Sharda','Software Enginner','5 years','This is my Last message to you Oditi')
console.log(ob2);
ob2.setJobExepereienceDetails('3 yesrs work expereiece');
console.log(ob2.getStudentExpereiece());
console.log(ob2.text);


// var profile1=new firstAbstractionClass11('Abu Al Shahriar','Rifat',
// 'Abu Al Shahriar Rifat',2019005005,"University of Sharda");
//encapsulation

//setter

//getter