module.exports = {
    //publicPath: "CatMovie",
    devServer: {
        proxy: {
            "/api": {
                target: "https://m.maoyan.com",
                changeOrigin: true,
                // pathRewrite: {
                //     "^api": ""
                // }    
            }
        }
    }
}