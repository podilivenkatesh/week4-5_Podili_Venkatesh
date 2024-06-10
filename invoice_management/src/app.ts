import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/database';
import organizationRoutes from './routes/organization';
import clientRoutes from './routes/client';
import sowRoutes from './routes/sow';
import sowPaymentPlanRoutes from './routes/sowpaymentplan';
import sowPaymentPlanItemRoutes from './routes/sowpaymentplanitem';
import invoiceRoutes from './routes/invoice';
import paymentRoutes from './routes/payment';
import invoicelineitemRoutes from './routes/invoicelineitem';

const app = express();
app.use(bodyParser.json());

app.use('/organizations', organizationRoutes);
app.use('/clients', clientRoutes);
app.use('/sows', sowRoutes);
app.use('/sow-payment-plans', sowPaymentPlanRoutes);
app.use('/sow-payment-plan-items', sowPaymentPlanItemRoutes);
app.use('/invoices', invoiceRoutes);
app.use('/payments', paymentRoutes);
app.use('/invoiceslineitem', invoicelineitemRoutes);


sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

export default app;
