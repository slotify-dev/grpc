import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env file
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

interface ServerConfig {
  host: string;
  port: number;
  tls: boolean;
  keyPath?: string;
  certPath?: string;
}

export default function loadConfig(): ServerConfig {
  // Default configuration
  const defaultConfig: ServerConfig = {
    host: process.env.HOST || '0.0.0.0',
    port: parseInt(process.env.PORT || '50051'),
    tls: process.env.TLS === 'true',
  };

  // Add TLS paths if enabled
  if (defaultConfig.tls) {
    defaultConfig.certPath = process.env.CERT_PATH;
    defaultConfig.keyPath = process.env.KEY_PATH;

    if (!defaultConfig.certPath || !defaultConfig.keyPath) {
      throw new Error('TLS enabled but certificate paths not configured');
    }
  }

  return defaultConfig;
}