(() => {
  const refs = {
     openModalBtn: document.querySelector('[data-modal-open]'),
     closeModalBtn: document.querySelector('[data-modal-close]'),
     modal: document.querySelector('[data-modal]'),
     body: document.querySelector('body'),
    //  drawerOverLay: document.qwerySelector('[js-drawer-overlay]'),
    //  drawer: document.qwerySelector('[js-drawer]'),
  };
 
  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);
  
  function openModal() {
    refs.modal.classList.remove('is-hidden');
    refs.body.classList.add('blocked-scroll');
  }
 
   function closeModal() {
     refs.modal.classList.add('is-hidden');
     refs.body.classList.remove('blocked-scroll');
   }
 

//  function toggleDrawer() {
//    refs.drawer.classList.toggle('is-open');
//    refs.drawerOvelay.classList.toggle('is-visible');

//    const isDrawerOpen = refs.drawer.classList.contains('is-open');
//    const method = isDraweropen ? 'disableBodyScroll' : 'enableBodyScroll';
//    bodyScrollLock[method](refs.drawerOverLay);
//  }

})();