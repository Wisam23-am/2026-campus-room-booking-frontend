/**
 * Developer Mode Utilities
 * For testing without login during development
 */

interface DevModeConfig {
  enabled: boolean;
  defaultRole: 'user' | 'admin';
}

export const getDevModeConfig = (): DevModeConfig => {
  const isDevMode = process.env.REACT_APP_DEV_MODE === 'true';
  const defaultRole = (process.env.REACT_APP_DEV_ROLE as 'user' | 'admin') || 'user';
  
  return {
    enabled: isDevMode && process.env.NODE_ENV === 'development',
    defaultRole,
  };
};

export const initializeDevMode = (): void => {
  const config = getDevModeConfig();
  
  if (config.enabled) {
    // Only set if not already authenticated
    if (!localStorage.getItem('authToken')) {
      localStorage.setItem('authToken', 'dev-token-' + Date.now());
      localStorage.setItem('userRole', config.defaultRole);
      console.log(`🔧 Developer Mode: Auto-logged in as ${config.defaultRole}`);
    }
  }
};

export const isDevMode = (): boolean => {
  return getDevModeConfig().enabled;
};
