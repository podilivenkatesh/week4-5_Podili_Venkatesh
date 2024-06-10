import dotenv from 'dotenv';
dotenv.config();

const credentials = {
    postgres:{
        USERNAME : process.env.USER || "postgres",
        DATABASE : process.env.DATABASE || "postgresql2",
        HOST  : process.env.HOST_NAME || "localhost",
        PASSWORD : process.env.PASSWORD || "Venky@15",
        DBPORT : Number(process.env.PORTNAME) || 5432,
        Jwtkey: process.env.JWT_KEY || 'pv987654321',
       }
};

export default credentials;