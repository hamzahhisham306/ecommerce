var path=require("path");
var HtmlWebpackPlugin=require("html-webpack-plugin");
var MiniCssExtracktPlugin=require("mini-css-extract-plugin");
module.exports={

    entry:{
    app:'./src/index.js'
},

output:{
    path:path.join(__dirname, "/dist"),
    publicPath:'',
    filename:"main.js"
},

mode:"development",
devServer:{
    contentBase: path.resolve(__dirname, './dist'),
    port:1234,


},
module:{
    rules:[
        {
            test:/\.html$/,
            use:[
                {
                    loader:"html-loader",
                    options:{
                        minimize:true,
                    }
                }
            ]
        },
        {
           test: /\.css$/,
           use: [
               'style-loader',
               {
                   loader: MiniCssExtracktPlugin.loader,
                   options: {
                       esModule: false,
                   },
               },
               'css-loader'
           ]
       },
       {
           test:/\.(png|svg|jpe?g|gif)$/,
           use:[
               {
                   loader:"file-loader",
                   options:{
                       name:'[name].[ext]',
                      outputPath:"images",
                   }
               }
           ]
       }
    ]


  

   },
           
              
 plugins:[
     new HtmlWebpackPlugin({
         filename:"index.html",
         template:"./src/index.html",
     }),
     new MiniCssExtracktPlugin({
         filename:"css/style.css",
     }),
 ],
         
};
