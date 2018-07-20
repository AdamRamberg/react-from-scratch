module.exports = api => {
  api.cache.invalidate(() => process.env.NODE_ENV === 'production');
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
        },
      ],
      '@babel/preset-react',
    ],
  };
};
