  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
  };
 
  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);
  window.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscKeyPress);
  
  function openModal(event) {
    event.preventDefault();
    refs.modal.classList.remove('is-hidden');
    refs.body.classList.add('blocked-scroll');
  }
 
   function closeModal() {
     refs.modal.classList.add('is-hidden');
     refs.body.classList.remove('blocked-scroll');
   }
 
  function onEscKeyPress(event) {
    if (event.code === 'Escape') {
      closeModal();
    }
  }

  function onBackdropClick(event) {
    if (event.target === document.querySelector('[data-modal]')) {
      closeModal();
    }
  }
