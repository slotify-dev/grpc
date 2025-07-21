/* eslint-disable */
import winston from 'winston';

const { combine, timestamp, json, errors } = winston.format;

export default winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(
    errors({ stack: true }),
    timestamp(),
    json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ 
      filename: 'logs/error.log', 
      level: 'error' 
    }),
    new winston.transports.File({ 
      filename: 'logs/combined.log' 
    }),
  ],
});

// Add stream for Express/Morgan if needed
logger.stream = {
  write: (message: string) => {
    logger.info(message.trim());
  },
};
