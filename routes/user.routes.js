import express from 'express';
import { register } from '../controller/user.controller.js';

const user_routes = express.Router()

user_routes.post('/user', register)

export default user_routes;