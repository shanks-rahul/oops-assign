function Temperature(){
    this.celsius=0;
    this.farhenhite=0;;
    this.getCelsius=function(){
        return this.celsius+"C";

    }
    this.getfarhenhite=function(){
        return this.farhenhite+"F";
    }
    this.setcelsius=function(n){
        this.celsius = 0;
        this.farhenhite=0;
        this.celsius+=n;
        this.farhenhite=(this.celsius*9/5)+32;
        
    }
    this.setfarhenhite=function(n){
        this.celsius = 0;
        this.farhenhite=0;
        this.farhenhite+=n;
        this.celsius=(this.farhenhite-32)*5/9;
    }
}

const temp=new Temperature();
console.log("initial celsius : "+temp.getCelsius());
console.log("initial farhenhite : "+temp.getfarhenhite());

temp.setcelsius(25);
console.log('Celsius: '+temp.getCelsius()) ;
console.log('farhenhite : '+temp.getfarhenhite());

temp.setfarhenhite(68);
console.log('Celsius: '+temp.getCelsius()) ;
console.log('farhenhite : '+temp.getfarhenhite());
