import React, { useEffect, useState } from 'react';
import styles from '@/styles/nav.module.scss';
import { useRouter } from 'next/router';
import { inconsolata } from "@/utils/fonts";
import Image from 'next/image';

import logo from "@/assets/brand/robo-ico.png"

export default function Nav({ backNav }) {
  const router = useRouter();
  const [anchors, setAnchors] = useState([]);
  const [activeAnchor, setActiveAnchor] = useState(null);

  useEffect(() => {
    const anchorElements = document.querySelectorAll('.anchor');
    const anchorIds = Array.from(anchorElements).map(element => element.id);
    setAnchors(anchorIds);

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveAnchor(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    anchorElements.forEach(element => observer.observe(element));

    return () => {
      anchorElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  const handleLinkClick = (id) => (event) => {
    event.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>
      {!backNav ? (
        <div className={styles.navContainer}>
          <Image className={styles.image} src={logo} alt="logo"/>
          <ul className={styles.navItems}>
            {anchors.map((id, index) => (
              <li key={id} className={styles.navItem}>
                {index > 0 && <span className={styles.pipe}>|</span>}
                <a
                  className={`${styles.link} ${id === activeAnchor ? styles.isActive : ''}`}
                  href={`#${id}`}
                  onClick={handleLinkClick(id)}
                >
                  {id}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles.backContainer}>
          <button
            className={`${inconsolata.className} ${styles.backButton}`}
            type="button"
            onClick={() => router.back()}
          >
            {"< Back"}
          </button>
        </div>
      )}
    </div>
  );
}
