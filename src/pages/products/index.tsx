import { GetStaticProps } from "next";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import config from "../../lib/config";
import { countProducts, listProductContent, ProductContent } from "../../lib/products";
import { listTags, TagContent } from "../../lib/tags";
import Head from "next/head";
import React from "react";
import tw from "twin.macro";
import BannerWithVideo from "../../components/sections/BannerWithVideo";
import TabGrid from "../../components/sections/TabCardGrid";
import Testimonial from "../../components/sections/ThreeColumnWithProfileImage";
import Footer from "../../components/sections/Footer";
import Header from "../../components/sections/Header";
import Banner from "../../components/sections/Banner";

type Props = {
  products: ProductContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
const Subheading = tw.span`tracking-wider text-sm font-medium`;
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
const Description = tw.span`inline-block mt-8`;

export default function Index({ products, tags, pagination }: Props) {
  const imageCss = tw`rounded-4xl`;
  const url = "/products";
  const title = "All products";
  return (
    <>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <Header />
      <BannerWithVideo
        heading={<>Delicious & Affordable <HighlightedText>Meals Near You.</HighlightedText></>}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Order Now"
        watchVideoButtonText="Meet The Chefs"
        primaryButtonUrl="url"
        watchVideoYoutubeUrl="url"
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Checkout our <HighlightedText>menu.</HighlightedText>
          </>
        }
      />
      <Banner
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={<>Why <HighlightedText>Choose Us ?</HighlightedText></>}
        statistics={[
          {
            key: "Orders",
            value: "94000+",
          },
          {
            key: "Customers",
            value: "11000+"
          },
          {
            key: "Chefs",
            value: "1500+"
          }
        ]}
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <Testimonial
        subheading=""
        heading={<>Customers <HighlightedText>Love Us.</HighlightedText></>}
      />
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
