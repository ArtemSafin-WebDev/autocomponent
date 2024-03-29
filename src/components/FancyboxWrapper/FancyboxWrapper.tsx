"use client";

import type { Fancybox as FancyboxType } from "@fancyapps/ui/types";
import * as Fancyapps from "@fancyapps/ui";
const Fancybox: typeof FancyboxType = Fancyapps.Fancybox;

import { useRef, useEffect } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function FancyboxWrapper(props: any) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return <div ref={containerRef}>{props.children}</div>;
}

export default FancyboxWrapper;
