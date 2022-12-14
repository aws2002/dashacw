import "../styles/main.scss";
import "../components/Skeleton/skeleton.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../public/locale/i18next"
export default function MyApp({ Component, pageProps }) {
  const Layout=Component.Layout || EmptyLayout
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
const EmptyLayout=({children})=><div>{children}</div>