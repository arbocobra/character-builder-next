// const config = {
//   // plugins: {
//   //   "@tailwindcss/postcss": {},
//   //   autoprefixer: {},
//   // },
//   plugins: [     
//     (await import('@tailwindcss/postcss')).default,
//     (await import('autoprefixer')).default,
//   ], 
// };
// export default config;

export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}