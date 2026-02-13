// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;



// import withBundleAnalyzer from '@next/bundle-analyzer';

// const bundleAnalyzer = withBundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
// });

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default bundleAnalyzer(nextConfig);




// next.config.mjs
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  // Your Next.js configuration options here
  // For example, experimental: { webpackMemoryOptimizations: true }
};

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false, // Optional: Prevents the analyzer from opening new tabs automatically
});

export default withAnalyzer(nextConfig);
