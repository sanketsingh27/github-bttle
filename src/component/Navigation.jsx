import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const linkArr = ["/", "battle"];
  return (
    <>
      {linkArr.map((item, index) => {
        return (
          <Link key={index} to={item}>
            {item === "/" ? "popular" : item}
          </Link>
        );
      })}
    </>
  );
}
