import React, { useEffect, useState } from 'react';
import Link from "next/link";

import styles from '@/styles/nav.module.scss';
import { useRouter } from 'next/router';
import { inconsolata } from "@/utils/fonts";
import Image from 'next/image';

import logo from "@/assets/brand/robo-ico.png"
import { HideOnDesktop } from '.';
import { useActiveRouter } from 'active-link-nextjs';

export default function Nav({ backNav }) {
  const router = useRouter();
  const [anchors, setAnchors] = useState([]);
  const [activeAnchor, setActiveAnchor] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { registerRoute } = useActiveRouter();

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
    setMenuOpen(false); // Close menu on link click
  };

  const handleScrollToAnchor = (e, href) => {
    e.preventDefault();
    router.push(href).then(() => {
      const anchorId = href.split('#')[1];
      if (anchorId) {
        const anchorElement = document.getElementById(anchorId);
        if (anchorElement) {
          anchorElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={styles.container}>
      {!backNav ? (
        <>
        <Image className={styles.image} src={logo} alt="logo" />
        <div className={styles.navContainer}>
            <ul className={`${styles.navItems} ${menuOpen ? styles.navItemsOpen : ''}`}>
              {menuOpen && (
                <li className={styles.closeButton} onClick={closeMenu}>
                  X
                </li>
              )}
              {/* Portfolio page Home button */}
              {
                router.pathname === '/portfolio' ?
                <li className={styles.navItem} ><Link className={styles.link} {...registerRoute(['/'])} >Home</Link></li> :
                <li className={styles.navItem}>
                    <a
                      className={`${styles.link}`}
                      href={`#Home`}
                      onClick={handleLinkClick("Home")}
                    >
                      Home
                    </a>
                </li>
              }
              {/* Anchor Links */}
              {anchors.map((id, index) => (
                (id !== "Contact" && id !== "Home") && 
                  (<li key={id} className={`${styles.navItem} ${id === "Contact" && styles.button}`}>
                    {(index > 0 && (id !== "Contact" || id !== "Home")) && <span className={styles.pipe}>|</span>}
                      <a
                        className={`${styles.link}`}
                        href={`#${id}`}
                        onClick={handleLinkClick(id)}
                      >
                        {id}
                      </a>
                  </li>)
              ))}
              {/* Portfolio Link */}
              <li className={styles.navItem} ><span className={styles.pipe}>|</span><Link className={styles.link} {...registerRoute(['portfolio'])} >Portfolio</Link></li>
              {/* Contact Link */}
              {
                router.pathname === '/portfolio' ?
                <li className={`${styles.navItem} ${styles.button}`}>
                  <a
                    className={styles.link}
                    onClick={(e) => handleScrollToAnchor(e, '/#Contact')}
                  >
                    Contact Us
                  </a>
                </li>:
                <li className={`${styles.navItem} ${styles.button}`}>
                  <a
                    className={`${styles.link}`}
                    href="#Contact"
                    onClick={handleLinkClick("Contact")}
                  >
                    Contact Us
              </a>
              </li>
              }
            </ul>
            <button className={styles.hamburger} onClick={toggleMenu}>
              ☰
            </button>
            <HideOnDesktop>
              <div className={`${styles.navItem} ${styles.button} ${styles.mobileContact}`}>
                <a
                  className={styles.link}
                  href={`#Contact`}
                  onClick={handleLinkClick("Contact")}
                >Contact Us</a>
              </div>
            </HideOnDesktop>
          </div>
          </>
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
