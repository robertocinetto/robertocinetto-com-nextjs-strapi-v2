import Seo from '../../components/seo'
import { fetchAPI } from '../../lib/api'

export default function Article({ article }) {
  console.log(article)
  const seo = {
    metaTitle: article.attributes.seo.metaTitle,
    metaDescription: article.attributes.seo.metaDescription,
    shareImage: article.attributes.cover,
    article: true,
  }
  return (
    <div>
      <Seo seo={seo}></Seo>
      <div className="prose ">{article.attributes.content}</div>
    </div>
  )
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI('/articles', { fields: ['slug'] })

  return {
    paths: articlesRes.data.map(article => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI('/articles', {
    filters: {
      slug: params.slug,
    },
    populate: {
      seo: { populate: '*' },
      cover: { populate: '*' },
    },
  })

  return {
    props: {
      article: articlesRes.data[0],
    },
  }
}
