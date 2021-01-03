import React from "react";
import { ProductContent } from "../lib/products";
import { TagContent } from "../lib/tags";
import ProductItem from "./ProductItem";
import Pagination from "./Pagination";

type Props = {
  products: ProductContent[];
  tag: TagContent;
  pagination: {
    current: number;
    pages: number;
  };
};
export default function TagProductList({ products, tag, pagination }: Props) {
  return (
    <div className={"container"}>
      <h1>
        All products / <span>{tag.name}</span>
      </h1>
      <ul>
        {products.map((it, i) => (
          <li key={i}>
            <ProductItem product={it} />
          </li>
        ))}
      </ul>
      <Pagination
        current={pagination.current}
        pages={pagination.pages}
        link={{
          href: () => "/products/tags/[[...slug]]",
          as: (page) =>
            page === 1
              ? "/products/tags/" + tag.slug
              : `/products/tags/${tag.slug}/${page}`,
        }}
      />
      <style jsx>
        {`
          .container {
            margin: 0 auto;
            max-width: 1200px;
            width: 100%;
            padding: 0 1.5rem;
            display: flex;
            flex-direction: column;
          }
          h1 {
            margin: 0 0 2rem;
            padding: 0;
            font-weight: 100;
            font-size: 1.75rem;
            color: #9b9b9b;
          }
          h1 span {
            font-weight: bold;
            color: #222;
          }
          ul {
            margin: 0;
            padding: 0;
            flex: 1 0 auto;
          }
          li {
            list-style: none;
            margin-bottom: 1.5rem;
          }

          @media (min-width: 769px) {
            h1 {
              font-size: 2rem;
            }
          }
        `}
      </style>
    </div>
  );
}
