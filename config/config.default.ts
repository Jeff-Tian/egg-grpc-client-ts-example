import {EggAppConfig, EggAppInfo, PowerPartial} from 'egg'

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig>

    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1592024575640_6100'

    // add your egg config in here
    config.middleware = []

    // add your special config in here
    const bizConfig = {
        grpcClient: {
            clients: {
                hero: {
                    protoPath: 'app/proto',
                    host: '0.0.0.0',
                    port: 5000,
                },
            },
        },

        onError: {
            isProd: app => app.env === 'prod'
        }
    }

    // the return config will combines to EggAppConfig
    return {
        ...config,
        ...bizConfig,
    }
};
