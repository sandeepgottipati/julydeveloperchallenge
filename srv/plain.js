const cds=require("@sap/cds");
module.exports=cds.service.impl(async function(srv){
    srv.on('theAnswer',async(req)=>{
        return 42;
    })
    srv.on('highestValue',async(req)=>{
       console.log(req.data);
        return Math.max(...req.data);
    })
    
})