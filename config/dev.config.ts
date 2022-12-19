import 'webpack-dev-server'
import config from './base.config'
import merge from 'webpack-merge'
import { Configuration } from 'webpack'


const devconfig: Configuration = {
    devServer: {
        host:"localhost",
        port:"3000",
        hot:true
    }
}

export default merge(config, devconfig)