const app = require('./app');
const { sequelize } = require('./config/database');

const PORT = process.env.PORT || 5000;

// Sync database
sequelize.sync({ alter: false }).then(() => {
  console.log('✅ Database synchronized successfully');
}).catch(err => {
  console.error('❌ Error synchronizing database:', err);
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════╗
║   Community Health Workers Reporting System (CHWRS)    ║
║                                                        ║
║   🚀 Server running on port ${PORT}                    ║
║   📝 API Documentation: http://localhost:${PORT}/api-docs ║
║   🗄️  Database: MySQL                                  ║
║   🔐 Authentication: JWT                               ║
╚════════════════════════════════════════════════════════╝
  `);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});

module.exports = server;
