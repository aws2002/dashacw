import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
export default function ActiveLink({ children, href }) {
  const router = useRouter();
  const style = {
    color: router.asPath === href ? "#411061" : "#fff",
  };
  const hendleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link href={href}>
      <a onClick={hendleClick} style={style}>
        {children}
      </a>
    </Link>
  );
}
