const path = require('path');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

const createStyledComponentsTransformer =
    require('typescript-plugin-styled-components').default;

const styledComponentsTransformer = createStyledComponentsTransformer({
    ssr: false,
    displayName: true,
    componentIdPrefix: 'counter',
});

module.exports = function () {
    const env = dotenv.config({ path: `.env.${process.env.NODE_ENV}` }).parsed;

    return {
        mode: process.env.NODE_ENV,
        devtool: 'cheap-module-source-map',
        entry: path.resolve(__dirname, './index.tsx'),
        module: {
            rules: [{
                test: /\.(js|ts|jsx|tsx)$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        getCustomTransformers: () => ({
                            before: [styledComponentsTransformer],
                        }),
                    },
                },
                exclude: /node_modules/
            }]
        },
        output: {
            path: path.resolve(__dirname, './build'),
            filename: process.env.NODE_ENV === 'production' ? '[name].[contenthash].js' : '[name].js',
            clean: true
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            }
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            modules: [
                'node_modules',
                './src'
            ],
            alias: {
                '@components': [path.resolve(__dirname, './src/components')],
                '@contexts': [path.resolve(__dirname, './src/contexts')],
                '@containers': [path.resolve(__dirname, './src/containers')],
                '@constants': [path.resolve(__dirname, './src/constants')],
                '@types': [path.resolve(__dirname, './src/types/types')],
                '@store': [path.resolve(__dirname, './src/store')],
            }
        },
        devServer: {
            static: {
                directory: path.resolve(__dirname, './dist')
            },
            port: 4002,
            server: {
                type: 'https'
            },
            client: {
                overlay: false
            },
            compress: true,
            hot: true,
            open: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
                inject: 'body'
            }),
            new DefinePlugin({
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                COUNTER_STEP: JSON.stringify(env.COUNTER_STEP),
            })
        ]
    }
}