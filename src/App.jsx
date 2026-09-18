import React, { useState, useEffect } from 'react'
import { Youtube, ExternalLink, Image as ImageIcon, Sun, Moon } from 'lucide-react'

/* ==========================================================================
   🔧 EASY CONFIGURATION
   Customize your landing page by editing the values below!
   ========================================================================== */
const CONFIG = {
  // Page Title & Subtitle
  title: "Amila Ishara ICT",
  subtitle: "Explore interactive ICT lessons, technology tutorials, and practical guides.",
  badgeText: "Welcome to the Official Portal",

  // Image settings:
  // Put your image in the "public" folder and specify the path here
  imageSrc: "/amila-ishara-ict-post.webp",
  imageAlt: "Amila Ishara ICT Seminar Post Banner",

  // YouTube Channel or Video link
  youtubeUrl: "https://www.youtube.com/@AmilaIsharaICT",
  youtubeButtonText: "Watch on YouTube",
  youtubeSecondaryText: "Click to open channel / video in a new tab",
}

export default function App() {
  const [imageError, setImageError] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('app-theme')
      if (saved) return saved
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
    }
    return 'dark'
  })

  // Synchronize theme with html attribute and listen to system theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('app-theme', theme)

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      // If user hasn't manually overridden or explicitly wants system match
      if (!localStorage.getItem('app-theme-manual')) {
        setTheme(e.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('app-theme-manual', 'true')
    setTheme(nextTheme)
  }

  return (
    <>
      {/* Top Header Bar with Theme Toggle */}
      <header className="header-bar">
        <button
          type="button"
          onClick={toggleTheme}
          className="theme-toggle-btn"
          aria-label="Toggle theme"
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
        >
          {theme === 'dark' ? (
            <>
              <Sun size={16} color="#fbbf24" />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <Moon size={16} color="#6366f1" />
              <span>Dark Mode</span>
            </>
          )}
        </button>
      </header>

      <main className="landing-container">
        {/* Top Badge */}
        {CONFIG.badgeText && (
          <div className="badge">
            <span>{CONFIG.badgeText}</span>
          </div>
        )}

        {/* Main Title & Subtitle */}
        <h1 className="page-title">{CONFIG.title}</h1>
        <p className="page-subtitle">{CONFIG.subtitle}</p>

        {/* Hero Card */}
        <div className="card">
          {/* Banner Highlight Frame (Full banner without cropping + luminous border) */}
          <div className="banner-highlight-frame">
            <div className="image-wrapper">
              {!imageError ? (
                <img
                  src={CONFIG.imageSrc}
                  alt={CONFIG.imageAlt}
                  className="landing-image"
                  onError={() => setImageError(true)}
                  loading="eager"
                />
              ) : (
                <div className="image-placeholder-box">
                  <ImageIcon size={48} strokeWidth={1.5} color="#9ca3af" />
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>
                      Image Placeholder
                    </strong>
                    <p>
                      Add your banner to <code>public/</code> folder as <code>amila-ishara-ict-post.webp</code>.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Area with YouTube Button */}
          <div className="action-area">
            <a
              href={CONFIG.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-btn"
              title="Open YouTube Link"
            >
              <span className="youtube-icon-wrap">
                <Youtube size={26} fill="white" strokeWidth={0} />
              </span>
              <span>{CONFIG.youtubeButtonText}</span>
              <ExternalLink size={18} strokeWidth={2.2} style={{ opacity: 0.85, marginLeft: 'auto' }} />
            </a>

            <span className="helper-text">{CONFIG.youtubeSecondaryText}</span>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} {CONFIG.title}. All rights reserved.</p>
          <p className="powered-by">
            Powered by{' '}
            <a
              href="https://nebulync.com"
              target="_blank"
              rel="noopener noreferrer"
              className="powered-by-link"
            >
              Nebulync.com
            </a>
          </p>
        </footer>
      </main>
    </>
  )
}
