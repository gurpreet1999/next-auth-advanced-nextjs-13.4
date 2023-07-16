/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  
  images: {
    domains: ['github.com', 'lh3.googleusercontent.com']
  },
  env:{
    MONGO_URI:"mongodb+srv://gurpreetsingh:Shalu%401999@cluster0.apn6ahn.mongodb.net/?retryWrites=true&w=majority",
  
    GOOGLE_CLIENT_ID:"132098366545-3qrn1760gmkltet9d7lrrp07o89mei4e.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET:"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",
    NEXTAUTH_SECRET:"abcde"


  }
}

module.exports = nextConfig
