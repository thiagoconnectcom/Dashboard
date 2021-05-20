import React from "react";

// components
import Header from "../components/Header";
import TitleBody from "../components/TitleBody";

export default function templates({ children, title }) {
  return (
    <div>
      <Header />
      <div className="container mb-5">
        <TitleBody title={title} />
        {children}
      </div>
    </div>
  );
}
