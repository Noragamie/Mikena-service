import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mikena Services - Ingénierie & IT',
    short_name: 'Mikena Services',
    description: 'Solutions d\'ingénierie de classe mondiale : informatique, solaire, fibre optique, formation et plus.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#003D2E',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
