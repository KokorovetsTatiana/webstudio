(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
  
  };
 
  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);
  refs.modal.addEventListener('click', closeModal);
  window.addEventListener('keydown', onEscKeyPress);
  
  function openModal() {
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

})();