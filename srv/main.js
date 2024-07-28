
const cds= require("@sap/cds");
module.exports= cds.service.impl(async (srv)=>{
    const db = await cds.connect.to('db')
const { Products } = db.entities
    srv.on('productInfo',async(req)=>{
        const {id}=req.data;
       const product= await SELECT.one.from(Products,id,(b)=>{
            b.ProductName,b.Supplier(s=>{
                s.CompanyName;
            })
        })
    
        return `${product.ProductName} by ${product.Supplier.CompanyName}`
    })
})