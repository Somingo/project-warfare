export class EnvironmentConfig {

    private static config = new EnvironmentConfig();

    width = 1280;
    height = 720;
    hitBox = true;

    private constructor() {
    }

    static get(): EnvironmentConfig {
        return EnvironmentConfig.config;
    }
}
