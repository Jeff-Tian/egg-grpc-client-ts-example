import {EggPlugin} from 'egg'

const plugin: EggPlugin = {}
plugin.grpcClient = {
    enable: true,
    package: 'egg-grpc-client-ts',
}

plugin.onError = {
    enable: true,
    package: "egg-error-display"
}

export default plugin
