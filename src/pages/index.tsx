import { GetStaticProps } from "next";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import config from "../lib/config";
import { countProducts, listProductContent, ProductContent } from "../lib/products";
import { listTags, TagContent } from "../lib/tags";
import Head from "next/head";
import React from "react";
import tw from "twin.macro";
import Banner from "../components/sections/Banner";
import TabGrid from "../components/sections/TabCardGrid";
import Testimonial from "../components/sections/ThreeColumnWithProfileImage";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";

type Props = {
  products: ProductContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
const HighlightedText = tw.span`bg-primary-900 text-white px-4 transform -skew-x-12 inline-block`;
const Container = tw.div`mx-5`;

export default function Index({ products, tags, pagination }: Props) {
  const imageCss = tw`rounded-4xl`;
  const url = "/products";
  const title = "All products";
  return (
    <>
      <BasicMeta url={"/"} title={"Home Page"} />
      <OpenGraphMeta url={"/"} title={"Home Page"} />
      <Container>
        <Header/>
        <Banner
          heading={<>Comfort meets style<HighlightedText>For your little one.</HighlightedText></>}
          description="We are commited to only sell products that are comfortable for kids, yet still stylish at the same time."
          imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
          imageCss={imageCss}
          primaryButtonText="Shop now"
          primaryButtonUrl="#products"
        />
        {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
        <TabGrid
          heading={
            <>
              Checkout our <HighlightedText>products.</HighlightedText>
            </>
          }
        />
        {/* <Testimonial
          subheading=""
          heading={<>Customers <HighlightedText>Love Us.</HighlightedText></>}
        /> */}
      </Container>
      <Footer />
    </>
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
