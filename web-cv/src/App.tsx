
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './App.scss';
const resumeUrl = import.meta.env.BASE_URL + 'resumes/resume.md';

const THEME_KEY = 'cvai-theme';
// Resume markdown content (should be loaded from file or API in production)
const resumeMarkdown = `## Resume Summary

Innovative software developer with a strong focus on frontend and mobile technologies, specializing in Angular, React, TypeScript, and cross-platform app development. Experienced in building scalable, user-centric applications and leading technical initiatives in remote-first environments. Adept at integrating AI-powered features, automating workflows, and driving product excellence for global clients. Passionate about leveraging modern JavaScript/TypeScript, cloud, and DevOps tools to deliver impactful solutions.

---

## Professional Experience

### Senior Mobile Developer — drodriguez.apps  
*August 2014 – Present*
- Developed native and hybrid mobile apps using Flutter, PhoneGap/Cordova, Angular, Ionic, TypeScript, and JavaScript for Android and iOS.
- Created home screen widgets in Kotlin; ran Flutter courses for co-workers.
- Integrated Firebase (Firestore, Auth, Cloud Functions, Crashlytics) and Meteor (Node.js, MongoDB) for full-stack projects.
- Managed Ubuntu/Nginx servers, implemented GitLab CI and Docker for CI/CD automation.
- Led marketing activities (Google Ads, ASO, SEO), designed logos, and engineered project architecture.
- Executed ASO strategies and SEO for micro-niches.

### Senior Front End Developer — YouGov (Remote, London)  
*February 2020 – January 2024*
- Built and maintained modern web applications for international clients using Angular, React, TypeScript, SCSS, and Tailwind.
- Supported legacy codebases (JS, jQuery, AngularJS, Handlebars).
- Implemented GitLab CI/CD and Docker for deployment automation.
- Practiced Behavior-Driven Development (BDD) with testcafe and gherkin-testcafe.

### Senior Full Stack Developer — DVELP (Remote, London)  
*November 2018 – December 2019*
- Developed contact center solutions and chatbots using React (Flex/Twilio), Node.js, and Express.
- Built PoC with NativeScript and led Flutter app development.
- Mentored junior developers and led JS best practices courses.
- Worked with Next.js, Chart.js, SASS, TypeScript, and ES6.

### Senior Front End Developer — AND Digital (London)  
*August 2016 – November 2018*
- Delivered digital transformation projects for high-profile clients using Angular, React, HTML5, CSS3 (Sass), Docker, and CI.
- Led automated testing (Karma, Nightwatch, Protractor) and mentored junior team members.
- **WhiteStuff:** Refactored ecommerce site from jQuery to Angular.
- **British Airways:** Estimated and prototyped Angular/React integrations.
- **The Telegraph:** Sole frontend developer for UX, payments, and subscriptions.
- **Premier Inn:** Developed AngularJS components, Dockerized projects, and mentored new joiners.

### Senior Front End Developer — Nektan (London)  
*October 2015 – May 2016*
- Developed mobile games and lobby websites using AngularJS, Canvas, ES6, HTML5, Sass, and CSS3.
- Managed version control with Git and project management with Scrum/JIRA.

### Senior Front End Developer — Sopra Group (Madrid)  
*September 2014 – September 2015*
- Architected projects and coordinated with backend teams for clients like Sanitas (NHSC) and BBVA.
- Developed web and app features using AngularJS and Ember.js.
- Proposed architectures, set up Node.js servers, and promoted AGILE MVC.

### Senior Front End Developer — Inmediastudio (Madrid)  
*March 2013 – September 2014*
- Built educational apps for tablets (Santillana) using JavaScript, jQuery, XML, and JSON.
- Focused on mobile-first, cross-platform performance and architecture.

### Full Stack Developer — Wion (Remote, Barcelona)  
*September 2012 – March 2013*
- Developed responsive websites for clients like Desigual and Larousee using PHP, MySQL, jQuery, and Photoshop.
- Managed SEO, front-end, and back-end development.

### Full Stack Developer — Isotools (Córdoba)  
*April 2012 – September 2012*
- Updated management software from Flash to jQuery; built e-commerce sites with Magento.
- Provided jQuery training and created layouts with CSS3/HTML5.

### Full Stack Developer — Dissoft Sur (Córdoba)  
*June 2010 – September 2010*
- Developed websites using Joomla, Prestashop, WordPress, and custom modules with JavaScript, jQuery, and PHP.

### Full Stack Developer — Deidos Studio (Córdoba)  
*March 2010 – June 2010*
- Internship: Developed responsive websites with jQuery and PHP (Zend Studio).

### Hardware Technician — PCCar (Córdoba)  
*March 2008 – July 2008*
- Assembled and repaired computers as part of Computer Systems studies.

---

## Education

**Applications Development**  
*2008 – 2010*
- PHP, Java, Visual Basic, C#, C++
- SQL/PL, phpMyAdmin, RDBMS creation, data analysis

**Computer Systems**  
*2006 – 2008*
- Computer repair/assembly, Windows/Linux (Fedora, Ubuntu), LAN wiring, scripting

**Database Management**  
*2011*
- MySQL, PL/SQL, RDBMS management

**Commerce and Marketing**  \n+*2011 – 2012*\n+- Marketing campaigns, commercial logistics, market research\n+\n+**Social Media Marketing**  \n+*2024*\n+\n+---\n+\n+## Technical Skills\n\n+- **Languages:** JavaScript, TypeScript, HTML5, CSS3, SCSS, SASS, PHP, Java, C#, C++, SQL, PL/SQL\n+- **Frameworks/Libraries:** Angular, React, Next.js, AngularJS, jQuery, Node.js, Express, Flutter, Ionic, PhoneGap/Cordova, NativeScript\n+- **DevOps/Tools:** Docker, GitLab CI/CD, Git, Ubuntu, Nginx, Meteor, Firebase, Google Cloud Platform\n+- **Testing:** Testcafe, Gherkin, Karma, Nightwatch, Protractor\n+- **Cloud/Backend:** Firebase, Meteor, Node.js, MongoDB, MySQL, REST APIs\n+- **Other:** Photoshop, Illustrator, SEO, ASO, Google Ads, marketing automation\n+- **AI/LLM:** Prompt engineering, LLM API integration, AI-powered feature development, workflow automation\n+- **Remote/Distributed:** Extensive experience in remote-first teams and asynchronous collaboration\n+\n+---\n+\n+## Soft Skills\n+\n+- Technical mentorship and team leadership\n+- Client communication and requirements analysis\n+- Project architecture and solution design\n+- Agile methodologies (Scrum, BDD)\n+- Self-driven, results-oriented, and adaptable\n+\n+---\n+\n+## Certifications & Awards\n+\n+*No certifications or awards listed in resume.md*\n+\n+---\n+\n+## Additional Information\n+\n+Open to remote roles focused on frontend, AI, and modern web/mobile technologies.\n+`;

import { useEffect, useState } from 'react';
// avatar image removed

const contactInfo = [
  {
    label: 'Email',
    value: 'd15_1_89@msn.com',
    href: 'mailto:d15_1_89@msn.com',
    icon: '📧',
  },
  {
    label: 'LinkedIn',
    value: 'Daniel Rodríguez Ramírez',
    href: 'https://www.linkedin.com/in/daniel-rodriguez-ramirez',
    icon: '💼',
  },
  {
    label: 'GitHub',
    value: 'erperejildo',
    href: 'https://github.com/erperejildo',
    icon: '🐙',
  },
  {
    label: 'StackOverflow',
    value: '4858133',
    href: 'https://stackoverflow.com/users/4858133',
    icon: '💻',
  },
];

function getSystemTheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

function App() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem(THEME_KEY);
    return stored || getSystemTheme();
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  // Keep CSS `--header-height` in sync with the actual header size so
  // sticky offsets match exactly (prevents sub-pixel drift when scrolling).
  useEffect(() => {
    const setHeaderHeightVar = () => {
      const header = document.querySelector('.cvai-header') as HTMLElement | null;
      if (!header) return;
      const rect = header.getBoundingClientRect();
      const headerHeight = rect.height; // use measured header height but don't write it back to header CSS

      // compute gutter in px (supports rem and px) so we can set an exact sidebar top value
      const rootStyle = getComputedStyle(document.documentElement);
      const gutterRaw = rootStyle.getPropertyValue('--main-gutter-top').trim() || '2rem';
      let gutterPx = 0;
      if (gutterRaw.endsWith('rem')) {
        const rem = parseFloat(gutterRaw);
        const rootFont = parseFloat(rootStyle.fontSize) || 16;
        gutterPx = rem * rootFont;
      } else if (gutterRaw.endsWith('px')) {
        gutterPx = parseFloat(gutterRaw);
      } else {
        gutterPx = parseFloat(gutterRaw) || 0;
      }

      // prefer header height (visual) rather than rect.bottom which can change with scroll
      const sidebarTopPx = headerHeight + gutterPx;
      document.documentElement.style.setProperty('--sidebar-top-px', `${sidebarTopPx}px`);
    };

    setHeaderHeightVar();
    window.addEventListener('resize', setHeaderHeightVar);

    // No fixed-sidebar fallback here — prefer CSS `position: sticky` and a
    // synced `--header-height` variable. Removing the fixed/placeholder logic
    // avoids layout thrash and potential large placeholder heights.

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => setHeaderHeightVar());
      const headerEl = document.querySelector('.cvai-header');
      if (headerEl) ro.observe(headerEl);
    }

    return () => {
      window.removeEventListener('resize', setHeaderHeightVar);
      if (ro) ro.disconnect();
    };
  }, []);

  useEffect(() => {
    const listener = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem(THEME_KEY)) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  

  return (
    <div className="cvai-app">
      <header className="cvai-header">
        <div className="cvai-header-inner">
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.25rem'}}>
            <h1 className="cvai-title">Daniel Rodriguez</h1>
            <div className="cvai-header-subtitle">Frontend & Mobile Developer<br/>Remote-first | AI | Cloud</div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
            <nav className="cvai-nav" aria-label="Main navigation">
              <ul>
                <li>
                  <a href={resumeUrl} download="resume.md">Download CV</a>
                </li>
              </ul>
            </nav>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
              {theme === 'dark' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Light mode">
                  <title>Switch to light mode</title>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </g>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dark mode">
                  <title>Switch to dark mode</title>
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="cvai-layout">
        <aside className="cvai-sidebar">
          <div className="cvai-contact-card">
            <h2>Contact</h2>
            <ul>
              {contactInfo.map((item) => {
                const isMail = typeof item.href === 'string' && item.href.startsWith('mailto:');
                return (
                  <li key={item.label}>
                    <a href={item.href} target={isMail ? undefined : '_blank'} rel={isMail ? undefined : 'noopener noreferrer'}>
                      <span className="cvai-contact-icon">{item.icon}</span>
                      <div className="cvai-contact-text">
                        <span className="cvai-contact-label">{item.label}:</span>
                        <span className="cvai-contact-value">{item.value}</span>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
        <main className="cvai-main">
          <div className="cvai-resume-markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{resumeMarkdown}</ReactMarkdown>
          </div>
        </main>
      </div>

      <footer className="cvai-footer">
        <div className="cvai-footer-inner">
          <div></div>
          <div>© {new Date().getFullYear()} Daniel Rodriguez</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
