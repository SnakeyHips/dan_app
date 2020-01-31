import React from "react";
import { Helmet } from "react-helmet";

interface HelmetWrapperProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function HelmetWrapper(props: HelmetWrapperProps) {
  return (
    <div>
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="theme-color" content="#1F2123" />
      </Helmet>
      {props.children}
    </div>
  );
}
