import {Service} from 'egg'

/**
 * Test Service
 */
export default class Test extends Service {

    /**
     * sayHi to you
     * @param name - your name
     */
    public async sayHi(name: string) {
        const result = await this.app.grpcClient
            .get('hero').hero
            .HeroService.FindOne({
                id: 1
            })

        return `hi, ${name}, this is from gRPC service: ${JSON.stringify(result)}`
    }
}
