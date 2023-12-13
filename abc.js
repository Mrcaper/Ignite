let express=require('express')
let app=express();
let cors=require('cors');
app.use(express.json());
app.use(express.urlencoded());
function check(domain,CB){
    let list={
        'abc.com':true,
        'xyz.in':true,
        'floricx.in':true
    }
    if(!list[domain]){
        return CB('not Authorised')
    }else{
        return CB(null,true);
    }
}
app.use(cors({origin:check}));
app.get('/',(req,res)=>{
    return res.send('Hello Dear');
});
app.listen(3001,()=>{
    console.log('connected');
});