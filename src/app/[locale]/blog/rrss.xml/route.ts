import {NextRequest, NextResponse} from 'next/server'
import {client} from '@/lib/sanity'
import {listPosts} from '@/lib/queries'

export const revalidate = 600

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ locale: string }> }
) {
  const {locale = 'es'} = await params
  const prefix = locale ? `/${locale}` : ''
  const base = process.env.NEXT_PUBLIC_BASE_URL!
  const posts = await client.fetch(listPosts, {}, {next:{tags:['blog']}})
  type Post = {
    title: string;
    slug: string;
    excerpt?: string;
    publishedAt?: string;
    _createdAt: string;
  };
  const items = posts.map((p: Post) => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${base}${prefix}/${p.slug}</link>
      <guid>${base}${prefix}/${p.slug}</guid>
      <description><![CDATA[${p.excerpt ?? ''}]]></description>
      <pubDate>${new Date(p.publishedAt ?? p._createdAt).toUTCString()}</pubDate>
    </item>`).join('')
  const copy = locale.startsWith('es')
    ? {
        title: 'GEESOL — Blog de energía solar',
        description:
          'Noticias, guías y casos de éxito sobre energía solar, autoconsumo y fotovoltaica.',
      }
    : {
        title: 'GEESOL — Solar energy blog',
        description:
          'News, guides, and success stories about solar energy, self-consumption, and photovoltaics.',
      }
  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0"><channel>
  <title>${copy.title}</title>
  <link>${base}${prefix}/blog</link>
  <description>${copy.description}</description>
  ${items}
  </channel></rss>`
  return new NextResponse(xml, { headers: { 'Content-Type': 'application/rss+xml' } })
}
