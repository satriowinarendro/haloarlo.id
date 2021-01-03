import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../../../components/Layout";
import BasicMeta from "../../../components/meta/BasicMeta";
import OpenGraphMeta from "../../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../../components/meta/TwitterCardMeta";
import ProductList from "../../../components/ProductList";
import config from "../../../lib/config";
import { countProducts, listProductContent, ProductContent } from "../../../lib/products";
import { listTags, TagContent } from "../../../lib/tags";

type Props = {
  products: ProductContent[];
  tags: TagContent[];
  page: number;
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Page({ products, tags, pagination, page }: Props) {
  const url = `/products/page/${page}`;
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = parseInt(params.page as string);
  const products = listProductContent(page, config.products_per_page);
  const tags = listTags();
  const pagination = {
    current: page,
    pages: Math.ceil(countProducts() / config.products_per_page),
  };
  return {
    props: {
      page,
      products,
      tags,
      pagination,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = Math.ceil(countProducts() / config.products_per_page);
  const paths = Array.from(Array(pages - 1).keys()).map((it) => ({
    params: { page: (it + 2).toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};
