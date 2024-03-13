const { prisma } = require("../prismaClient");

const getProduct=async(req,res)=>{
    const id=req.params.id;
    try{
        const product=await prisma.product.findUnique(
            {
                where:{
                    id
                }
            }
        )
    }
}


const createProduct=async(req,res)=>{
    const product={...req.body};
    console.log(product);
    try{
        const addedProduct=await prisma.product.create(
            {
                data:{
                    ...req.body
                }
            }
        )
        res.json(addedProduct);
    }
    catch(err)
    {
        res.json({err:"unable to create product"});
    }
}

const getAllProducts=async(req,res)=>{
    try{
        const products=await prisma.product.findMany();
        res.json(products);
    }
    catch(err)
    {
        res.json({err:"unable to get products"});
    }
}
const updateProduct=async(req,body)=>{
    const updatedProduct=await prisma.product.update(
        {
            where:{
                id:req.body.id,
            },
            data:{
                ...req.body
            }
        }
    )
}

const deleteProduct=async(req,res)=>{
    try{
        const id=req.params.id;
        const deletedProduct=await prisma.product.deleteById(id);
        res.json(deletedProduct);
    }
    catch(err)
    {
        res.json({err:"unable to delete product"});
    }
}

module.exports={getProduct,updateProduct,deleteProduct,createProduct,getAllProducts}