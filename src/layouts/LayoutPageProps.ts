import { PageProps } from "gatsby"
import { WindowLocation, NavigateFn, NavigateOptions } from "@reach/router"


export type LayoutPageContext = {
    id: string
}

export type LayoutPageProps = PageProps<Queries.Query, LayoutPageContext>;

export type LayoutPagePropsAnd<TAddToQuery> = PageProps<Queries.Query & TAddToQuery, LayoutPageContext>;
