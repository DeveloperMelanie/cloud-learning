import Head from 'next/head'

export default function SEO({ title, description }) {
    return (
        <Head>
            <meta charSet='utf-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0'
            />
            <title>
                {title ? `${title} | Cloud Learning` : 'Cloud Learning'}
            </title>
            <meta
                name='description'
                content={
                    description ||
                    'Disfruta los mejores cursos de toda la web a precios increíbles'
                }
            />
            <meta name='author' content='Lázaro' />
            <meta name='robots' content='index, follow' />
            <meta name='mobile-web-app-capable' content='yes' />
            <meta name='apple-mobile-web-app-capable' content='yes' />
            <link rel='icon' href='/favicon.ico' />
            <meta name='msapplication-TileColor' content='#000000' />
            <meta name='theme-color' content='#000000' />
            <meta
                name='apple-mobile-web-app-status-bar-style'
                content='#000000'
            />
            <meta property='og:site_name' content='Cloud Learning' />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:type' content='website' />
            <meta property='og:locale' content='es_ES' />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:description' content={description} />
            <meta name='twitter:card' content='summary' />
        </Head>
    )
}
