import * as React from 'react';
import { childClassClosure, baseClassAnd, ClassableProps } from "@jcharlesworthuk/your-mum-core/dist/functions";
import { MDXProvider } from "@mdx-js/react";

const baseClass = 'markdown';

type Props  = ClassableProps & {
  children: React.ReactNode | React.ReactNode[]
}


const components = {
}


const MdxBlock: React.FunctionComponent<Props> = (props: Props) => {

  return <article className={baseClassAnd(baseClass, props)}>
    <MDXProvider components={components}>
      {props.children}
    </MDXProvider>
  </article >
}
export default MdxBlock;
