//If we use multiple callback inside callback function it will become complex,
//so if any error come in it, it will become very hard to find
//therefore it is called callback hell.
function add(p1,p2,CB){
    setTimeout(()=>{
        if(typeof(p1)!='number'){
            return CB('give p1 as number')
        }
        if(typeof(p2)!='number'){
            return CB('give p2 as number')
        }
        return CB(null,p1+p2);
    },1000);
}

function sub(p1,p2,CB){
    setTimeout(()=>{
        if(typeof(p1)!='number'){
            return CB('give p1 as number')
        }
        if(typeof(p2)!='number'){
            return CB('give p2 as number')
        }
        return CB(null,p1-p2);
    },1000);
}

add(20,30,(error,data)=>{
    if(error){
        console.log('error',error)
    }else{
        console.log('data',data)
    }
});

add(40,90,(error,data)=>{
    if(error){
        console.log('erroe',error)
    }
    sub(data,20,(error1,data1)=>{
        if(error1){
        console.log('error',error1);
        }
        console.log('data1',data1);
    });
});