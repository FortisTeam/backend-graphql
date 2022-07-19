import { Router } from 'express';
const routesManager = Router();

routesManager.get('/ping', (req, res) => {
	res.status(200).send('OK');
});


export default routesManager;
