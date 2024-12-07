var a=new Promise((x,y)=>{
    if(1){
        x("product ordered......")
    }else{
        y("reject")
    }
})

var b=new Promise((x,y)=>{
    if(1){
        x("shipped")
    }else{
        y("reject")
    }
})

var c=new Promise((x,y)=>{
    if(1){
        x("nearer to location")
    }else{
        y("reject")
    }
})
var d=new Promise((x,y)=>{
    if(1){
        x("order delivered")
    }else{
        y("reject")
    }
})

a.then((res)=>{
    console.log(res)
    return b;
}).then((res)=>{
    console.log(res);
    return c;
}).then((res)=>{
    console.log(res);
    return d;
}).then((res)=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})