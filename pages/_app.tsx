import 'utils/swiper'; // 1-ый
import 'styles/globals.css'; // 2-ой, т.к. стили tailwind должны переопределять стили swiper
import { Hydrate } from 'react-query/hydration';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRef } from 'react';

interface LayoutComponent {
  (props: { children: JSX.Element }): JSX.Element;
}

interface ComponentWithLayout {
  (): JSX.Element;
  Layout?: LayoutComponent;
}

interface Props {
  Component: ComponentWithLayout;
  pageProps: any;
}

const EmptyLayout: LayoutComponent = (props) => {
  return <>{props.children}</>;
};

const MyApp = ({ Component, pageProps }: Props) => {
  const queryClientRef = useRef<QueryClient>();
  const Layout = Component.Layout || EmptyLayout;

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
