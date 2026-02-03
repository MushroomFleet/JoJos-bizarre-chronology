/**
 * JoJo Timeline - Interactive Scrolling Timeline
 * Vanilla JavaScript Implementation
 */

const JoJoTimeline = (function() {
    'use strict';

    // === STATE ===
    const state = {
        currentUniverse: 'original',
        currentPart: null,
        scrollProgress: 0,
        expandedCards: new Set(),
        observer: null
    };

    // === DOM CACHE ===
    const dom = {};

    // === INITIALIZATION ===
    function init() {
        cacheDOMElements();
        bindEvents();
        setupIntersectionObserver();
        handleHashChange();

        // Make all cards visible initially (fallback if no JS animation needed)
        setTimeout(() => {
            document.querySelectorAll('.event-card').forEach(card => {
                card.classList.add('is-visible');
            });
        }, 100);
    }

    function cacheDOMElements() {
        dom.html = document.documentElement;
        dom.body = document.body;
        dom.nav = document.querySelector('.timeline-nav');
        dom.progressTrack = document.querySelector('.progress-track');
        dom.progressFill = document.querySelector('.progress-track__fill');
        dom.progressIndicator = document.querySelector('.progress-track__indicator');
        dom.progressYear = document.querySelector('.progress-track__year');
        dom.universeButtons = document.querySelectorAll('.universe-btn');
        dom.partLinksContainer = document.getElementById('nav-parts');
        dom.universes = document.querySelectorAll('.universe');
        dom.parts = document.querySelectorAll('.part');
        dom.eventCards = document.querySelectorAll('.event-card');
        dom.menuToggle = document.querySelector('.timeline-nav__menu-toggle');
        dom.modal = document.getElementById('reference-modal');
    }

    // === EVENT BINDING ===
    function bindEvents() {
        // Universe toggle
        dom.universeButtons.forEach(btn => {
            btn.addEventListener('click', handleUniverseToggle);
        });

        // Scroll events (throttled)
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Hash changes
        window.addEventListener('hashchange', handleHashChange);

        // Event card toggles (delegated)
        document.addEventListener('click', handleCardToggle);

        // Mobile menu toggle
        if (dom.menuToggle) {
            dom.menuToggle.addEventListener('click', handleMenuToggle);
        }

        // Modal close
        if (dom.modal) {
            const backdrop = dom.modal.querySelector('.modal__backdrop');
            const closeBtn = dom.modal.querySelector('.modal__close');

            if (backdrop) backdrop.addEventListener('click', closeModal);
            if (closeBtn) closeBtn.addEventListener('click', closeModal);
        }

        // Keyboard navigation
        document.addEventListener('keydown', handleKeyboard);

        // Part links (delegated for dynamic updates)
        if (dom.partLinksContainer) {
            dom.partLinksContainer.addEventListener('click', handlePartLinkClick);
        }
    }

    // === UNIVERSE SWITCHING ===
    function handleUniverseToggle(e) {
        const universe = e.currentTarget.dataset.universe;
        if (universe === state.currentUniverse) return;

        state.currentUniverse = universe;

        // Update HTML data attribute
        dom.html.dataset.universe = universe;

        // Update button states
        dom.universeButtons.forEach(btn => {
            const isActive = btn.dataset.universe === universe;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', isActive);
        });

        // Show/hide universes
        dom.universes.forEach(u => {
            const isOriginal = u.id === 'original-universe';
            const isSbr = u.id === 'sbr-universe';

            if (universe === 'original') {
                u.hidden = !isOriginal;
            } else {
                u.hidden = !isSbr;
            }
        });

        // Update navigation links
        updatePartNavigation();

        // Scroll to universe header
        const targetUniverse = document.getElementById(`${universe}-universe`);
        if (targetUniverse) {
            targetUniverse.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // Update URL
        history.pushState(null, '', `#${universe}`);

        // Close mobile menu if open
        closeMobileMenu();
    }

    function updatePartNavigation() {
        if (!dom.partLinksContainer) return;

        const parts = state.currentUniverse === 'original'
            ? [1, 2, 3, 4, 5, 6]
            : [7, 8, 9];

        dom.partLinksContainer.innerHTML = parts.map(partNum =>
            `<li><a href="#part-${partNum}" class="part-link" data-part="${partNum}">Part ${partNum}</a></li>`
        ).join('');
    }

    // === SCROLL HANDLING ===
    function handleScroll() {
        updateProgress();
        updateActivePartLink();
    }

    function updateProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.min((scrollTop / docHeight) * 100, 100);

        state.scrollProgress = progress;

        if (dom.progressFill) {
            dom.progressFill.style.height = `${progress}%`;
        }

        if (dom.progressIndicator) {
            dom.progressIndicator.style.top = `${progress}%`;
        }

        updateCurrentYear();
    }

    function updateCurrentYear() {
        if (!dom.progressYear) return;

        const viewportCenter = window.innerHeight / 2;
        let closestCard = null;
        let closestDistance = Infinity;

        dom.eventCards.forEach(card => {
            // Skip cards in hidden universe
            const universe = card.closest('.universe');
            if (universe && universe.hidden) return;

            const rect = card.getBoundingClientRect();
            const cardCenter = rect.top + rect.height / 2;
            const distance = Math.abs(cardCenter - viewportCenter);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestCard = card;
            }
        });

        if (closestCard) {
            const year = closestCard.dataset.year;
            dom.progressYear.textContent = formatYear(year);
        }
    }

    function formatYear(year) {
        if (!year) return '';
        const num = parseInt(year, 10);
        if (isNaN(num)) return year;
        if (num < 0) {
            return `${Math.abs(num).toLocaleString()} BC`;
        }
        return num.toString();
    }

    function updateActivePartLink() {
        let activePart = null;
        const scrollTop = window.scrollY + 150;

        dom.parts.forEach(part => {
            // Skip parts in hidden universe
            const universe = part.closest('.universe');
            if (universe && universe.hidden) return;

            const rect = part.getBoundingClientRect();
            const partTop = rect.top + window.scrollY;
            const partBottom = partTop + rect.height;

            if (scrollTop >= partTop && scrollTop < partBottom) {
                activePart = part.dataset.partNumber;
            }
        });

        if (activePart !== state.currentPart) {
            state.currentPart = activePart;

            document.querySelectorAll('.part-link').forEach(link => {
                link.classList.toggle('active', link.dataset.part === activePart);
            });
        }
    }

    // === INTERSECTION OBSERVER ===
    function setupIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        state.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, options);

        dom.eventCards.forEach(card => {
            state.observer.observe(card);
        });
    }

    // === CARD EXPANSION ===
    function handleCardToggle(e) {
        const toggle = e.target.closest('.event-card__toggle');
        if (!toggle) return;

        const card = toggle.closest('.event-card');
        const details = card.querySelector('.event-card__details');
        if (!details) return;

        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

        toggle.setAttribute('aria-expanded', !isExpanded);
        details.hidden = isExpanded;

        if (isExpanded) {
            state.expandedCards.delete(card.id);
        } else {
            state.expandedCards.add(card.id);
        }
    }

    // === NAVIGATION ===
    function handlePartLinkClick(e) {
        const link = e.target.closest('.part-link');
        if (!link) return;

        // Close mobile menu
        closeMobileMenu();
    }

    function handleMenuToggle() {
        const isExpanded = dom.menuToggle.getAttribute('aria-expanded') === 'true';
        dom.menuToggle.setAttribute('aria-expanded', !isExpanded);
        dom.partLinksContainer.classList.toggle('is-open', !isExpanded);
    }

    function closeMobileMenu() {
        if (dom.menuToggle && dom.partLinksContainer) {
            dom.menuToggle.setAttribute('aria-expanded', 'false');
            dom.partLinksContainer.classList.remove('is-open');
        }
    }

    // === URL HASH HANDLING ===
    function handleHashChange() {
        const hash = window.location.hash.slice(1);
        if (!hash) return;

        if (hash === 'original' || hash === 'sbr') {
            // Universe switch
            const btn = document.querySelector(`[data-universe="${hash}"]`);
            if (btn && !btn.classList.contains('active')) {
                btn.click();
            }
        } else if (hash.startsWith('part-')) {
            // Part navigation
            const partNum = parseInt(hash.replace('part-', ''), 10);

            // Determine which universe this part belongs to
            const universe = partNum <= 6 ? 'original' : 'sbr';

            // Switch universe if needed
            if (universe !== state.currentUniverse) {
                const btn = document.querySelector(`[data-universe="${universe}"]`);
                if (btn) {
                    // Temporarily suppress scroll from universe switch
                    btn.click();
                }
            }

            // Scroll to part after brief delay
            setTimeout(() => {
                const part = document.getElementById(hash);
                if (part) {
                    part.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else if (hash.startsWith('event-')) {
            // Specific event
            const event = document.getElementById(hash);
            if (event) {
                event.scrollIntoView({ behavior: 'smooth', block: 'center' });
                event.classList.add('is-highlighted');
                setTimeout(() => event.classList.remove('is-highlighted'), 2000);
            }
        } else if (hash === 'original-universe' || hash === 'sbr-universe') {
            const target = document.getElementById(hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    // === MODAL ===
    function openModal(title, content) {
        if (!dom.modal) return;

        const titleEl = dom.modal.querySelector('.modal__title');
        const bodyEl = dom.modal.querySelector('.modal__body');

        if (titleEl) titleEl.textContent = title;
        if (bodyEl) bodyEl.innerHTML = content;

        dom.modal.hidden = false;
        dom.modal.setAttribute('aria-hidden', 'false');

        // Focus close button
        const closeBtn = dom.modal.querySelector('.modal__close');
        if (closeBtn) closeBtn.focus();

        // Prevent body scroll
        dom.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!dom.modal) return;

        dom.modal.hidden = true;
        dom.modal.setAttribute('aria-hidden', 'true');
        dom.body.style.overflow = '';
    }

    // === KEYBOARD NAVIGATION ===
    function handleKeyboard(e) {
        // Escape closes modal
        if (e.key === 'Escape') {
            closeModal();
            closeMobileMenu();
        }
    }

    // === DYNAMIC EVENT RENDERING ===
    function renderEvents(partId, events) {
        const container = document.getElementById(`${partId}-events`);
        if (!container || !events || events.length === 0) return;

        const html = events.map(event => createEventCardHTML(event)).join('');
        container.innerHTML = html;

        // Re-observe new cards
        container.querySelectorAll('.event-card').forEach(card => {
            if (state.observer) {
                state.observer.observe(card);
            }
        });

        // Update DOM cache
        dom.eventCards = document.querySelectorAll('.event-card');
    }

    function createEventCardHTML(event) {
        const typeAttr = event.type ? `data-type="${event.type}"` : '';
        const yearDisplay = formatYear(event.year);
        const monthDisplay = event.month ? `<span class="event-card__month">${event.month}</span>` : '';

        const detailsList = event.details && event.details.length > 0
            ? `<ul class="event-card__bullets">${event.details.map(d => `<li>${d}</li>`).join('')}</ul>`
            : '';

        const tags = event.tags && event.tags.length > 0
            ? `<div class="event-card__tags">${event.tags.map(t =>
                `<span class="tag tag--${t.type}">${t.name}</span>`
              ).join('')}</div>`
            : '';

        return `
            <article class="event-card" id="${event.id}" data-year="${event.year}" ${typeAttr}>
                <div class="event-card__indicator" aria-hidden="true">
                    <span class="event-card__dot"></span>
                </div>
                <div class="event-card__date">
                    <span class="event-card__year">${yearDisplay}</span>
                    ${monthDisplay}
                </div>
                <div class="event-card__content">
                    <h4 class="event-card__title">
                        <button class="event-card__toggle" aria-expanded="false">
                            <span>${event.title}</span>
                            <span class="event-card__toggle-icon" aria-hidden="true"></span>
                        </button>
                    </h4>
                    <p class="event-card__summary">${event.summary}</p>
                    <div class="event-card__details" hidden>
                        ${detailsList}
                        ${tags}
                    </div>
                </div>
            </article>
        `;
    }

    // === PUBLIC API ===
    return {
        init,
        switchUniverse: function(universe) {
            const btn = document.querySelector(`[data-universe="${universe}"]`);
            if (btn) btn.click();
        },
        renderEvents,
        openModal,
        closeModal,
        getState: () => ({ ...state })
    };
})();

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', JoJoTimeline.init);
} else {
    JoJoTimeline.init();
}

// Also expose for potential external use
window.JoJoTimeline = JoJoTimeline;
