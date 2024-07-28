const cds=require("@sap/cds");

module.exports=cds.service.impl(async function(srv){
    srv.on('hello', async (req) => {
        try {
            // Log the request for debugging purposes
//            console.log('Request:', req.method);

            // Return a response to the client

            return `Hello ${req.data.to||'sandeep'}!`;
        } catch (error) {
            // Handle errors appropriately
            console.error('Error:', error);
            return req.error(500, 'Internal Server Error');
        }
    });
    srv.on('ping',(req)=>{
        return "pong"
    });
    srv.on("sum",(req)=>{
        try {
            let {a,b}=req.data;
            a=parseInt(a);
            b=parseInt(b);
            return `${a+b}`
        } catch (error) {
            return req.error(404,error);
            
        }
    })
})