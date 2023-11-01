const result=new Promise((resolve,reject)=>{

    let delivery=true;

    if(delivery){
        success()
    }

    else{
        failure()
    }
})

result .then(success).catch(failure)

function success(){
    ((type, name, callback)=> {
        // document.write('Veg rice ordered<br>');
        console.log('Pizza ordered');
        // document.write('Veg rice for preparation<br>');
        console.log('Pizza for preparation');
        setTimeout(()=> {
            let ans = `Your ${type} ${name} ready. The total bill amount is $180`;
            callback(ans);
            // document.write(On the Way Pizzahub server<br>);
            console.log("On the Way Pizzahub server");
            
        }, 3000);
        setTimeout(()=>{
            // document.write(Succesfully Deliverd Thanks for your order);
            console.log("Succesfully Deliverd Thanks for your order");
        },6000)
    })
    
    ("Pizza","is",(message)=>{
        // document.write(message);
        console.log(message);
    });

}


function failure(){
    console.log("not delivered");
}