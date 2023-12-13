// It is a function which pass an argument to another function and is executed later is called callback function
setTimeout(()=>{
    console.log('abd');// It will print after 1 second because we are giving time for 1s
},1000);
console.log('Hello'); //It will print before 'abd'

function add(p1,p2){
    setTimeout(()=>{
        return p1+p2;
    },1000);
}
console.log(add(42,48)); //Here it will give undefined because it is executing this line first

//example of callback function
function sub(p1,p2,CB){
    setTimeout(()=>{
        return CB(p1-p2);
    },1000);
}
sub(30,20,(data)=>{console.log(data)});

function evenodd(p1,CB){
    setTimeout(()=>{
        if(p1%2==0){
            return CB('even number');
        }else{
            return CB(null,'odd number');
        }
    },1000);
}
evenodd(7,(error,data)=>{
    if(error){
        console.log(error);
    }
    if(data){
        console.log(data);
    }
});