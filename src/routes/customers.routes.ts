import { getCustomerById, getCustomers, postCustomer, putCustomer } from "../controllers/customers.controller";
import { Router } from "express";
import { validateBody, validateParams } from "../middlewares/validation.middleware";
import { customerSchema, updateCustomerSchema } from "../schemas/customer.schema";
import { idParamsSchema } from "../schemas/idParams.schema";

export const customerRouter = Router();

customerRouter.get('/customers', getCustomers);
customerRouter.get('/customers/:id', validateParams(idParamsSchema), getCustomerById);
customerRouter.post('/customers', validateBody(customerSchema), postCustomer);
customerRouter.put('/customers/:id',
  validateParams(idParamsSchema),
  validateBody(updateCustomerSchema),
  putCustomer);