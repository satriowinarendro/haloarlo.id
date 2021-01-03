import Link from "next/link";
import { TagContent } from "../lib/tags";

type Props = {
  tag: TagContent;
};
export default function Tag({ tag }: Props) {
  return (
    <Link href={"/products/tags/[[...slug]]"} as={`/products/tags/${tag.slug}`}>
      <a>{"#" + tag.name}</a>
    </Link>
  );
}
