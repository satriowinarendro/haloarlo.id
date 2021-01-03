import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../../components/Layout";
import BasicMeta from "../../../components/meta/BasicMeta";
import OpenGraphMeta from "../../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../../components/meta/TwitterCardMeta";
import TagProductList from "../../../components/TagProductList";
import config from "../../../lib/config";
import { countProducts, listProductContent, ProductContent } from "../../../lib/products";
import { getTag, listTags, TagContent } from "../../../lib/tags";
import Head from "next/head";

type Props = {
  products: ProductContent[];
  tag: TagContent;
  page?: string;
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Index({ products, tag, pagination, page }: Props) {
  const url = `/products/tags/${tag.name}` + (page ? `/${page}` : "");
  const title = tag.name;
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <TagProductList products={products} tag={tag} pagination={pagination} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queries = params.slug as string[];
  const [slug, page] = [queries[0], queries[1]];
  const products = listProductContent(
    page ? parseInt(page as string) : 1,
    config.products_per_page,
    slug
  );
  const tag = getTag(slug);
  const pagination = {
    current: page ? parseInt(page as string) : 1,
    pages: Math.ceil(countProducts(slug) / config.products_per_page),
  };
  const props: {
    products: ProductContent[];
    tag: TagContent;
    pagination: { current: number; pages: number };
    page?: string;
  } = { products, tag, pagination };
  if (page) {
    props.page = page;
  }
  return {
    props,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = listTags().flatMap((tag) => {
    const pages = Math.ceil(countProducts(tag.slug) / config.products_per_page);
    return Array.from(Array(pages).keys()).map((page) =>
      page === 0
        ? {
            params: { slug: [tag.slug] },
          }
        : {
            params: { slug: [tag.slug, (page + 1).toString()] },
          }
    );
  });
  return {
    paths: paths,
    fallback: false,
  };
};
