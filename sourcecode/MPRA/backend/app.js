const express = require('express');
const cors = require('cors');
const compression = require('compression');
const fileRoutes = require('./routes/fileRoutes');
const dataRoutes = require('./routes/dataRoutes');
const app = express();
const PORT = 3001;
const corsOptions = {
    origin: 'http://localhost:5173', // chỉ định rõ frontend URL
    credentials: true,
  };
  
app.use(cors(corsOptions));
app.use(compression());
app.use(express.json({ limit: '10mb' }));

app.use('/api/files', fileRoutes);
app.use('/api/data', dataRoutes);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
