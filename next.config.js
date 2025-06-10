/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com',
                port: '',
                pathname: '/**',
            },
             {
                protocol: 'https',
                hostname: 'marcomediacion.es',
                port: '',
                pathname: '/**',
            },
 {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/**',
            },
           
        ]
      },
};

module.exports = nextConfig;
