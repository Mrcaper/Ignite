const { func } = require("joi");

//callback create functio to create employee data
let employees=[];
function create(data,CB){
    setTimeout(()=>{
        if(typeof(data)!='object'){
            return CB('provide data in object');
        }
        if(typeof(data.name)!='string'){
            return CB('provide name in string');
        }
        if(typeof(data.contact)!='number'){
            return CB('provide contact in number');
        }
        if(typeof(data.email)!='string'){
            return CB('provide email in string');
        }
        let id=employees.length+1;
        data.id=id;
        employees.push(data);
        return CB(null,data)
    },1000);
}
create({name:'sohan',contact:290424022,email:'sohan@gmail.com'},(error,data)=>{
    if(error){
        console.log('error',error);
    }
    console.log('data',data);
});

create({name:'rohit',contact:753953595,email:'rohit@gmail.com'},(error,data)=>{
    if(error){
        console.log('error',error);
    }
    console.log('data',data);
});

create({name:'Manoj',contact:9359852759,email:'manoj@gmail.com'},(error,data)=>{
    if(error){
        console.log('error',error);
    }
    console.log('data',data);
});

//function to find employee data
function findOne(id,CB){
    setTimeout(() => {
        if(typeof(id)!='number'){
            return CB('provide id in number');
        }
        if(id<1||id>employees.length||typeof(employees[id-1])!='object'){
            return CB('provide correct data');
        }
        return CB(null,employees[id-1]);
    },1000);
}

findOne(1,(error,data)=>{
    if(error){
        console.log('error',error);
    }
    console.log('data',data);
});

//function for update employee data
function update(id,data,CB){
    setTimeout(() => {
        if(typeof(id)!='number'){
            return CB('provide id in number');
        }
        let updatingData=employees[id-1];
        if(typeof(data)!='object'){
            return CB ('provide data in object');
        }
        if(typeof(data.name)=='string'){
            updatingData.name=data.name;
        }
        if(typeof(data.contact)=='number'){
            updatingData.contact=data.contact;
        }
        if(typeof(data.email)=='string'){
            updatingData.email=data.email;
        }
        employees[id-1]=updatingData;
        return CB(null,employees[id-1]);
    }, 1000);
}
update(1,{name:'Ravi'},(error,data)=>{
    if(error){
        console.log('error',error);
    }
    console.log('data',data);
});

//function to delete data
function deleting(id,CB){
setTimeout(()=>{
if(typeof(id)!="number"){
    return CB ('provide id in number')
}
if(id<1||id>employees.length||typeof(employees[id-1])!='object'){
    return CB ('provide correct data');
}
delete employees[id-1];
return CB(null,employees[id-1]);
},1000);
}
deleting(1,(error,data)=>{
    if(error){
        console.log('error',error)
    }
    console.log({data:'data is deleted'});
});