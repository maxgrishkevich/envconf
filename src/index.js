class EnvironmentConfigurator {
    constructor() {
        this.env = process.env.NODE_ENV || 'development';
        this.configurations = {};
    }

    // Define configurations for environments
    defineConfig(environment, config) {
        if (!environment || !config) {
            throw new Error("Both environment and config must be provided");
        }
        this.configurations[environment] = config;
    }

    // Get the current environment's configuration
    getConfig() {
        return this.configurations[this.env];
    }

    // Optionally set the current environment (useful for testing)
    setEnvironment(env) {
        if (!this.configurations[env]) {
            throw new Error(`Configuration for environment '${env}' not defined`);
        }
        this.env = env;
    }
}

// Export an instance (singleton pattern) for simplicity
// This ensures that configurations are defined and accessed from the same instance
module.exports = new EnvironmentConfigurator();
