module.exports = api => {
    api.cache.using(() => process.env.NODE_ENV)

    const isTest = api.env('test')
  
    const presets = [
      [
        '@babel/preset-env',
        {
          modules: isTest ? 'auto' : false,
        },
      ],
      '@babel/preset-react',
    ]
    const plugins = ['@babel/plugin-proposal-object-rest-spread']
  
    return {
      presets,
      plugins
    }
  }