const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { sequelize } = require('./models');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');

const app = express();

app.use(cors());

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`✅ Server running on port ${process.env.PORT}`)
  );
});
