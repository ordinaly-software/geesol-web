import {groq} from 'next-sanity'

const publicPostFilter =
  `_type=="post" && (!defined(isPrivate) || isPrivate==false)`;

const newsCategoryFilter =
  `count((categories[]->slug.current)[@ in ["noticias", "news"]]) > 0 || count((categories[]->title)[@ in ["Noticias", "News"]]) > 0`;

const nonNewsPostFilter =
  `${publicPostFilter} && !(${newsCategoryFilter})`;

const newsPostFilter =
  `${publicPostFilter} && (${newsCategoryFilter})`;

const searchablePostFilter =
  `${nonNewsPostFilter} && (!defined($q) || $q == "" || pt::text(body) match $q) && (!defined($cat) || $cat == "" || $cat in categories[]->slug.current || $cat in categories[]->title)`;

const searchableNewsPostFilter =
  `${newsPostFilter} && (!defined($q) || $q == "" || pt::text(body) match $q) && (!defined($cat) || $cat == "" || $cat in categories[]->slug.current || $cat in categories[]->title)`;

const orderedPosts = '| order(coalesce(publishedAt,_updatedAt) desc)';

// Common projection
export const postFields = groq`{
  _id,
  postType,
  title,
  seoTitle,
  seoDescription,
  ogImage { asset, alt },
  mainImage { asset, alt },
  "slug": slug.current,
  excerpt,
  coverImage { asset, alt },
  body,
  lang,
  "categories": categories[]-> {
    _id,
    title,
    "slug": slug.current,
    ogImage { asset, alt }
  },
  "author": author-> { name, avatar },
  publishedAt,
  updatedAt,
  isPrivate
}`

export const allPublicSlugs = groq`*[${publicPostFilter} && defined(slug.current)].slug.current`

export const postBySlug = groq`*[_type=="post" && slug.current==$slug && (!defined(isPrivate) || isPrivate==false)][0] ${postFields}`

export const listPosts = groq`*[${publicPostFilter}] ${orderedPosts} [0...50] ${postFields}`

export const paginatedPosts: string = groq`{
  "items": *[${searchablePostFilter}] ${orderedPosts} [$offset...$end] ${postFields},
  "total": count(*[${searchablePostFilter}])
}`

export const paginatedPostsAsc: string = groq`{
  "items": *[${searchablePostFilter}] | order(coalesce(publishedAt,_updatedAt) asc) [$offset...$end] ${postFields},
  "total": count(*[${searchablePostFilter}])
}`

export const paginatedNewsPosts: string = groq`{
  "items": *[${searchableNewsPostFilter}] ${orderedPosts} [$offset...$end] ${postFields},
  "total": count(*[${searchableNewsPostFilter}])
}`

export const paginatedNewsPostsAsc: string = groq`{
  "items": *[${searchableNewsPostFilter}] | order(coalesce(publishedAt,_updatedAt) asc) [$offset...$end] ${postFields},
  "total": count(*[${searchableNewsPostFilter}])
}`

export const highlightedPosts = groq`*[${nonNewsPostFilter} && count((categories[]->slug.current)[@ in ["destacado", "highlighted"]]) > 0] ${orderedPosts} [0...10] ${postFields}`

export const highlightedNewsPosts = groq`*[${newsPostFilter} && count((categories[]->slug.current)[@ in ["destacado", "highlighted"]]) > 0] ${orderedPosts} [0...10] ${postFields}`
