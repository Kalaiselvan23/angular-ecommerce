const { Pool }=require('pg');
const { PrismaPg } =require('@prisma/adapter-pg')
const {PrismaClient}=require('@prisma/client');
const connectionString=`${process.env.DB_URL}`
const pool = new Pool({connectionString})
const adapter = new PrismaPg(pool)

const prisma=new PrismaClient();

module.exports={prisma}