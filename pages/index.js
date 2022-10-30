import React from "react"
import Hero from "../components/Home/Hero"
import Content from "../components/Home/Content"
import { client } from "../lib/client"
import Sale from '../components/Product/Sale'
import Other from '../components/Home/Other'
const Home = ({ products }) => {
  return (
    <main>
      <Hero />
      <Content products={products} />
      <Sale />
      <Other />
    </main>
  )
}

export const getStaticProps = async () => {
  const products = await client.fetch(`
    *[_type == 'product']{_id, 'image': image.asset._ref, name, price, slug}
  `)

  return {
    props: { products },
  }
}

export default Home
