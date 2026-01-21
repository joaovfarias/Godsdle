/**
 * Environment configuration with dev fallbacks
 * Production environment variables should be set in the deployment platform
 */

const getEnvVariable = (key, defaultValue) => {
  const value = import.meta.env[key];

  if (!value) {
    console.warn(
      `Environment variable ${key} is not set. Using fallback: ${defaultValue}`,
    );
    return defaultValue;
  }

  return value;
};

const config = {
  // Backend API URL
  BACKEND_URL: getEnvVariable(
    "VITE_BACKEND_URL",
    "http://localhost:8000", // Dev fallback
  ),

  // Detect environment (production, staging, development)
  ENVIRONMENT: import.meta.env.MODE || "development",

  // Debug mode (disable in production)
  DEBUG: import.meta.env.DEV,
};

export default config;
