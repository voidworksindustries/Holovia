const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => links.classList.remove('open'));
  });
}

const contactForm = document.getElementById('contactForm');
const contactStatus = document.getElementById('contactStatus');

if (contactForm && contactStatus) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
      contactStatus.textContent = 'Please fill in the title and message before sending.';
      return;
    }

    const formData = new FormData(contactForm);
    const title = String(formData.get('title') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const subject = `[Holovia Contact] ${title}`;
    const body = message;
    const mailtoLink =
      `mailto:voidworksindustries@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    contactStatus.textContent = 'Opening your email app with the message draft.';
    window.location.href = mailtoLink;
  });
}

const imageLightbox = document.getElementById('imageLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const shotButtons = document.querySelectorAll('.shot-button');

if (imageLightbox && lightboxImage && lightboxCaption && lightboxClose && shotButtons.length > 0) {
  const closeLightbox = () => {
    if (imageLightbox.open) {
      imageLightbox.close();
    }
  };

  shotButtons.forEach(button => {
    button.addEventListener('click', () => {
      const src = button.dataset.lightboxSrc || '';
      const alt = button.dataset.lightboxAlt || '';
      const caption = button.dataset.lightboxCaption || '';

      if (!src) {
        return;
      }

      lightboxImage.src = src;
      lightboxImage.alt = alt;
      lightboxCaption.textContent = caption;

      if (typeof imageLightbox.showModal === 'function') {
        imageLightbox.showModal();
        return;
      }

      window.open(src, '_blank', 'noopener');
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);

  imageLightbox.addEventListener('click', event => {
    const bounds = imageLightbox.getBoundingClientRect();
    const clickedOutside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;

    if (clickedOutside) {
      closeLightbox();
    }
  });

  imageLightbox.addEventListener('close', () => {
    lightboxImage.removeAttribute('src');
    lightboxImage.alt = '';
    lightboxCaption.textContent = '';
  });
}
