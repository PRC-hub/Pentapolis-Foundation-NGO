import React, { useEffect } from 'react';
import './impact.css';

const Impact = () => {
useEffect(() => {
const animateCounters = () => {
    const counters = document.querySelectorAll<HTMLElement>('.counter');
    const duration = 2000;
    const startDelay = 500;

    function easeOutQuart(t: number) {
    return 1 - Math.pow(1 - t, 4);
    }

    counters.forEach(counter => {
    const target = +counter.dataset.target!;
    const suffix = counter.textContent?.includes('%') ? '%' : '';
    let startTimestamp: number | null = null;

    const updateCounter = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easedProgress = easeOutQuart(progress);
        const value = Math.floor(easedProgress * target);

        counter.textContent = value.toLocaleString() + suffix;

        if (progress < 1) {
        requestAnimationFrame(updateCounter);
        } else {
        counter.textContent = target.toLocaleString() + suffix;
        }
    };

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
        setTimeout(() => requestAnimationFrame(updateCounter), startDelay);
        observer.unobserve(counter);
        }
    }, { threshold: 0.5 });

    counter.textContent = '0' + suffix;
    observer.observe(counter);
    });
};

const initAnimations = () => {
    const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('show');

        if (entry.target.classList.contains('yellow-caption')) {
            setTimeout(() => {
            entry.target.classList.add('show-caption');
            }, 500);
        }
        }
    });
    }, observerOptions);

    const animatables = document.querySelectorAll(
    '.animate-left, .animate-right, .foreground-image, .impact-title, .main-heading, .yellow-caption'
    );

    animatables.forEach(el => observer.observe(el));
};

const stats = document.querySelectorAll<HTMLElement>('.stat');
stats.forEach(stat => {
    stat.addEventListener('mouseenter', () => {
    stat.style.transform = 'translateY(-10px)';
    });

    stat.addEventListener('mouseleave', () => {
    stat.style.transform = '';
    });
});

animateCounters();
initAnimations();
}, []);

return (
<section className="impact-section">
    <div className="background-overlay"></div>

    <div className="impact-content">
    <div className="left-side animate-left">
        <h3 className="impact-title">Transforming Lives Nationwide</h3>
        <h1 className="main-heading">
        Empowering <span>1.8 Million+</span> Youth Through Skill Development and Vocational Training
        </h1>

        <div className="stats-container">
        <div className="stat">
            <img src="https://img.icons8.com/ios-filled/50/ffd700/conference-call.png" alt="Students" className="stat-icon" />
            <h2 className="counter" data-target="180000">0</h2>
            <p>Youth trained with industry-relevant skills</p>
        </div>

        <div className="stat">
            <img src="https://img.icons8.com/ios-filled/50/ffd700/handshake.png" alt="Partnership" className="stat-icon" />
            <h2 className="counter" data-target="300">0</h2>
            <p>Corporate & government partnerships</p>
        </div>

        <div className="stat post-training">
            <img src="https://img.icons8.com/ios-filled/50/ffd700/economic-improvement.png" alt="Livelihood" className="stat-icon" />
            <h2 className="counter" data-target="85">0</h2>
            <p>Employment success rate post-training</p>
        </div>

        <div className="stat">
            <img src="https://img.icons8.com/ios-filled/50/ffd700/worldwide-location.png" alt="Centers" className="stat-icon" />
            <h2 className="counter" data-target="75">0</h2>
            <p>Training centers across 25 states</p>
        </div>
        </div>
    </div>

    <div className="right-side animate-right">
        <div className="image-container">
        <img src="/images/ngo photo.jpg" alt="Youth Skill Training Session" className="foreground-image" />
        <div className="image-decoration"></div>
        <div className="yellow-caption">
            "Building India's Workforce Since 2017"
        </div>
        </div>
    </div>
    </div>
</section>
);
};

export default Impact;
