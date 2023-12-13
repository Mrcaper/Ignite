let express=require('express');
let app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/user/:number',(req,res)=>{
    let a=req.params.number;
    console.log(a)
    return res.send({data:a**3});
});


app.get('/user1/:name',(req,res)=>{
console.log(req.params.name);
    return res.send(`Hello ${req.params.name} !`);
})


app.get('/user2',(req,res)=>{
let userId=req.query.id;
let userName=req.query.name;
let c=[];
c.push(res.send(`{ID:${userId},name:${userName}}`))
return c;
});


app.get('/user3',(req,res)=>{
    let num=req.body.num;
    return res.send({data:num*num*num});
});

app.get('/user4',(req,res)=>{
let Admin=[{Admin:'Amit',password:1234},{Admin:'Rohan',password:4321}];
for(let i of Admin){
    if(req.body==Admin[i]){
        console.log(Admin[i])
        return res.send('login succesful');
    }
    if(req.body!=Admin[i]){
       return res.send('kii')
    }
}
})


app.listen(3001,()=>{
    console.log('connected');
});