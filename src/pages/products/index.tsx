import { GetStaticProps } from "next";
import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import ProductList from "../../components/ProductList";
import config from "../../lib/config";
import { countProducts, listProductContent, ProductContent } from "../../lib/products";
import { listTags, TagContent } from "../../lib/tags";
import Head from "next/head";

type Props = {
  products: ProductContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Index({ products, tags, pagination }: Props) {
  const url = "/products";
  const title = "All products";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <ProductList products={products} tags={tags} pagination={pagination} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = listProductContent(1, config.products_per_page);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countProducts() / config.products_per_page),
  };
  return {
    props: {
      products,
      tags,
      pagination,
    },
  };
};
