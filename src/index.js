'use strict';

  const tableBtn = document.querySelector('.button-toggle-table');
  const gridBtn = document.querySelector('.button-toggle-grid');
  const tableView = document.querySelector('.table-scroll-container');
  const gridView = document.querySelector('.cards');

  tableBtn.addEventListener('click', () => {
    tableBtn.classList.add('active');
    gridBtn.classList.remove('active');
    tableView.style.display = 'block';
    gridView.style.display = 'none';
  });

  gridBtn.addEventListener('click', () => {
    gridBtn.classList.add('active');
    tableBtn.classList.remove('active');
    gridView.style.display = 'grid';
    tableView.style.display = 'none';
  });
