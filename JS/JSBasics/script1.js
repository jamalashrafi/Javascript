//var name='jam';
//console.log(name);
//
//var age=21;
//console.log(age);
//
//var choice=true;
//console.log(choice);

//Operators

/* var person1=45;
var person2=65;

var sum1,sub1,mul1,div1,test;

sum1=person1+person2;
sub1=person1-person2;
mul1=person1*10;
div1=person2/5;

console.log('sum is ' + sum1 + ' sub is ' + sub1 + ' mul is ' + mul1 + ' div1 is ' + div1);

console.log(person1 > person2);

console.log(typeof test,typeof test1);*/

//Project - 1
/*var johnMass=77;
var johnHeight=1.647;

var markMass=70;
var MarkHeight=1.52;

var bmiJohn=(johnMass)/(johnHeight * johnHeight);

var bmiMark=(markMass)/(MarkHeight * MarkHeight);

var compare=bmiMark > bmiJohn;

console.log( 'Is Mark BMI greater than John BMI ' + compare);*/


var name='jey';
var age=20;

//if else
/*
if(age < 13){
   console.log(name + ' is a child ');
   }else if(age >=13 && age< 20){
       console.log(name + ' is a teenager ');
   }else if(age >=20 && age<30){
       console.log(name + ' is a young man');
   }else{
       console.log(name + ' is a man');
   } */

//var comp=age>=13 && age<20 ?'teenager':'Adult or child';
//console.log(comp);

/*switch(true){
    case age <13:
        console.log('child');
        break;
    case age>=13 && age<20:
        console.log('teenager');
        break;
    case age>20:
        console.log('Adult');
        break;
    default:
        console.log('baby');
}*/

/*var johnScore1=10;
var johnScore2=10;
var johnScore3=10;

var mikeScore1=10;
var mikeScore2=10;
var mikeScore3=10;

var johnAvg=johnScore1+johnScore2+johnScore3/3;

var mikeAvg=mikeScore1+mikeScore2+mikeScore3/3;

if(johnAvg>mikeAvg){
    console.log('Average of John\' team is greate and average is '+johnAvg);
}else if(johnAvg<mikeAvg){
    console.log('Average of Mike\' team is greate and average is '+mikeAvg);
}else{
    console.log('Both teams have the same average');
}*/

var finalBillAmount=[];
var tipAmount=[];

//use if for each element
//use ternary
//iterate and calc
//simply access the values

/*var tipCal=function(amt){
    if(amt < 50){
          return amt*.2;
       }else if(amt >= 50 && amt<=200){
           return amt*.15;
       }else{
           return amt*.1;
       }
}

tipAmount.push(tipCal(128));
tipAmount.push(tipCal(48));
tipAmount.push(tipCal(268));

//final amount to be paid
finalBillAmount.push(128+tipAmount[0]);
finalBillAmount.push(48+tipAmount[1]);
finalBillAmount.push(268+tipAmount[2]);

console.log('final amount to be paid is '+finalBillAmount + '---------- '+tipAmount);*/

//var obj={
//    name:'jamal',
//    phone:11111,
//    qulif:'MS',
//    birth:1991,
//    calcAge:function(){
//        this.age= 2019-this.birth;
//    }
//};
//
//console.log(obj.calcAge(),obj);

/*var john={
    name:'john',
    mass:75,
    height:1.5,
    calcBIMI:function(){
        this.BMI=this.mass/(this.height*this.height);
    }
}


var mark={
    name:'mark',
    mass:100,
    height:2,
    calcBIMI:function(){
        this.BMI=this.mass/(this.height*this.height);
        
    }
}
john.calcBIMI();
mark.calcBIMI();

if(john.BMI > mark.BMI){
    console.log('John is having greater BMI with values ',john);
}else if(john.BMI < mark.BMI){
    console.log('Mark is having greater BMI with values ',mark);
}else{
    console.log('Both have same BMI');
}
*/

var john={
    bills:[124,48,268,180,42],
    tips:[],
    finalAmount:[],
    calculateTip:function(){
        for(var i=0;i<this.bills.length;i++){
            if(this.bills[i]<50){
               this.tips.push(this.bills[i]*.2);
            }else if(this.bills[i]>50 && this.bills[i]<200){
               this.tips.push(this.bills[i]*.15);      
            }else{
               this.tips.push(this.bills[i]*.1);
            }
        }
        return this.tips;
        //console.log(this.tips);
    },
    calFinalAmount:function(){
        for(var i=0;i<this.bills.length;i++){
            this.finalAmount.push(this.bills[i]+this.tips[i]);
        }
        return this.finalAmount;
    }
}
var mark={
    bills:[77,357,110,180,45],
    tips:[],
    finalAmount:[],
    calculateTip:function(){
        for(var i=0;i<this.bills.length;i++){
            if(this.bills[i]<100){
               this.tips.push(this.bills[i]*.2);
            }else if(this.bills[i]>100 && this.bills[i]<300){
               this.tips.push(this.bills[i]*.10);      
            }else{
               this.tips.push(this.bills[i]*.25);
            }
        }
        return this.tips;
        //console.log(this.tips);
    },
    calFinalAmount:function(){
        for(var i=0;i<this.bills.length;i++){
            this.finalAmount.push(this.bills[i]+this.tips[i]);
        }
        return this.finalAmount;
    }
}

//console.log(john.calculateTip(),john.calFinalAmount());
//console.log(mark.calculateTip(),mark.calFinalAmount());
john.calculateTip();john.calFinalAmount();
mark.calculateTip();mark.calFinalAmount();
calGreater();

function avg(obj){
    var avg=0;
    for(var i=0;i<obj.length;i++){
        avg=avg+obj[i];
    }
    return avg/obj.length;
}
function calGreater(){
    var johnAvg=avg(john.finalAmount);
    var markAvg=avg(mark.finalAmount);
    
    if(johnAvg>markAvg){
        console.log('John avg is greater ',johnAvg);
    }else if(johnAvg<markAvg){
        console.log('Mark avg is greater ',markAvg);
    }else{
        console.log('Both have same Avg');
    }
    console.log(johnAvg,markAvg);

}










