window.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.btn-menu');
  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open');
    document.querySelector('.mobile-menu').classList.toggle('open');
    document.querySelector('.content.head').classList.toggle('open');
  });

  const toFormBtn = document.querySelector('#toFormBtn');
  if (toFormBtn) {
    toFormBtn.addEventListener('click', () => {
      document.querySelector('#feedbackForm').scrollIntoView({ behavior: 'smooth'});
    });
  }

  const swiper = new Swiper('.item-swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination'
    }
  });

  const tabs = document.querySelectorAll('.items.tabs .item-card');
  const tabsContent = document.querySelectorAll('.item-description');

  tabs.forEach((item, index) => {
    item.addEventListener('click', () => {
      tabs.forEach((tab) => {
        if (tab === item) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      })
      toggleTab(index);
    })
  })

  const selectWrapper = document.querySelector('.select-wrapper');
  if(selectWrapper) {
    selectWrapper.addEventListener('click', function() {
      this.querySelector('.select').classList.toggle('open');
    })
  }

  document.querySelectorAll(".custom-option").forEach((option, index) => {
    option.addEventListener('click', function() {
      if (!this.classList.contains('selected')) {
        this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
        this.classList.add('selected');
        this.closest('.select').querySelector('.select__trigger span').textContent = this.textContent;
        toggleTab(index);
      }
    })
  });

  window.addEventListener('click', function(e) {
    const select = document.querySelector('.select')
    if (!select.contains(e.target)) {
      select.classList.remove('open');
    }
  });

  function toggleTab(index) {
    tabsContent.forEach((item, tabIndex) => {
      if (index === tabIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    })
  }

  document.querySelector('button.form-button').addEventListener('click', () => {
    let form = {
      data: {
        phone: document.querySelector('.phone-input input').value,
        email: document.querySelector('.email-input input').value,
      },
    };

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://lucwxxibsvaywuc.form.io/feedback/submission', true);
    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.onreadystatechange = function() {
      if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 201) {
        console.log('good')
        document.querySelector('.form').style.display="none";
        document.querySelector('.sucsess').style.display="block";
      }
    }

    xhr.send(JSON.stringify(form));
  });
});