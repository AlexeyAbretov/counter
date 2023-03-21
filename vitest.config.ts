import path from 'path';

export default {
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@components': [path.resolve(__dirname, './src/components')],
      '@contexts': [path.resolve(__dirname, './src/contexts')],
      '@containers': [path.resolve(__dirname, './src/containers')],
      '@constants': [path.resolve(__dirname, './src/constants')],
      '@types': [path.resolve(__dirname, './src/types/types')],
      '@store': [path.resolve(__dirname, './src/store')],
      '@theme': [path.resolve(__dirname, './src/theme')],
    },
  },
};
