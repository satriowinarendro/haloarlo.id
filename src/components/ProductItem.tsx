import { ProductContent } from "../lib/products";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

type Props = {
  product: ProductContent;
};
export default function ProductItem({ product }: Props) {
  return (
    <Link href={"/products/" + product.slug}>
      <a>
        <Date date={parseISO(product.date)} />
        <h2>{product.title}</h2>
        <style jsx>
          {`
            a {
              color: #222;
              display: inline-block;
            }
            h2 {
              margin: 0;
              font-weight: 500;
            }
          `}
        </style>
      </a>
    </Link>
  );
}
