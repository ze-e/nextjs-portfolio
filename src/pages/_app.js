import { inconsolata } from "@/utils/fonts";
import "../styles/index.scss";

export default function App({ Component, pageProps }) {
  return (
    <div className={inconsolata.className}>
      <Component {...pageProps} />
    </div>
  );
}
