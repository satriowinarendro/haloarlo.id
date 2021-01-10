import React from "react";
import Shopee from "../assets/full-shoping-cart.svg";
import Instagram from "../assets/instagram.svg";
import config from "../lib/config";

export function SocialList({}) {
  return (
    <div>
      <a
        title="Instagram"
        href={`https://instagram.com/${config.instagram_account}`}
        target="_blank"
        rel="noopener"
      >
        <Instagram width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="Shopee"
        href={`https://shopee.co.id/${config.shopee_account}`}
        target="_blank"
        rel="noopener"
      >
        <Shopee width={24} height={24} fill={"#222"} />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
          margin-top: 3rem;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}
