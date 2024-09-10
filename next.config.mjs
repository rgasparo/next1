/** @type {import('next').NextConfig} */
import NextFederationPlugin from '@module-federation/nextjs-mf';

export function webpack(config, options) {
  const { isServer } = options;
  config.plugins.push(
    new NextFederationPlugin({
      name: 'next1',
      filename: 'static/chunks/remoteEntry.js', // Añade el archivo para el host
      remotes: {
        next2: `next2@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        //pagos: "pagos@http://localhost:4173/assets/remoteEntry.js", // Añade el remoto de 'pagos'
      },
    }),
  );

  return config;
}
