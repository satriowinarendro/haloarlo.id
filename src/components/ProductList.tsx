import React from "react";
import { ProductContent } from "../lib/products";
import ProductItem from "./ProductItem";
import TagLink from "./TagLink";
import Pagination from "./Pagination";
import { TagContent } from "../lib/tags";

type Props = {
  products: ProductContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function ProductList({ products, tags, pagination }: Props) {
  return (
    <div className={"container"}>
      <div className={"products"}>
        <ul className={"product-list"}>
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
            href: (page) => (page === 1 ? "/products" : "/products/page/[page]"),
            as: (page) => (page === 1 ? null : "/products/page/" + page),
          }}
        />
      </div>
      <ul className={"categories"}>
        {tags.map((it, i) => (
          <li key={i}>
            <TagLink tag={it} />
          </li>
        ))}
      </ul>
      <style jsx>{`
        .container {
          display: flex;
          margin: 0 auto;
          max-width: 1200px;
          width: 100%;
          padding: 0 1.5rem;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        li {
          list-style: none;
        }
        .products {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
        }
        .products li {
          margin-bottom: 1.5rem;
        }
        .product-list {
          flex: 1 0 auto;
        }
        .categories {
          display: none;
        }
        .categories li {
          margin-bottom: 0.75em;
        }

        @media (min-width: 769px) {
          .categories {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
