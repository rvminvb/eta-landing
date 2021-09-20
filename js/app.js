window.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.item-swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination'
    }
  });

  let selectedTab = 2;
  const tabs = document.querySelectorAll('.items.tabs .item-card');
  const tabsContent = document.querySelectorAll('.item-description');

  tabs.forEach((item, index) => {
    item.addEventListener('click', () => {
      selectedTab = index + 1;
      tabs.forEach((tab) => {
        if (tab === item) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      })
      tabsContent.forEach((item, tabIndex) => {
        if (index === tabIndex) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      })
    })
  })

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
        // console.log('good');
        alert('good');
      }
    }

    xhr.send(JSON.stringify(form));
  });
});