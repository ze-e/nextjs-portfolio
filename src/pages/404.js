import { useRouter } from 'next/router';
import styles from '@/styles/404.module.scss'; 
import { inconsolata } from "@/utils/fonts";

export default function Page404() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.description}>
        Oops! The page you&#39;re looking for doesn&#39;t exist.
      </p>
      <button
        className={`${inconsolata.className} ${styles.backButton}`}
        type="button"
        onClick={() => router.back()}
      >
        {"< Back"}
      </button>
    </div>
  );
}
