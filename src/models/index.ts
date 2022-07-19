import mongoose from 'mongoose';

import { UsersSchema } from './schema';

export default {
	Users: mongoose.model('users', UsersSchema),
};