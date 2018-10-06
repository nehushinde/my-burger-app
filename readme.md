create react application

$ create-react-app my-burger-app-basic

use css in application 

$ npm run eject

then in config->webpack.config.dev.js file

add following lines where test: css, options: {
    modules: true,
    localIdentName: '[name]__[local]__[hash:base64:5]'
}

then in config->webpack.config.prod.js file

add following lines where test: css, options: {
    modules: true,
    localIdentName: '[name]__[local]__[hash:base64:5]'
}
                
then do some clean up in application