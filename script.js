function navigateTo(pageId) {
  // Get all pages
  const pages = document.querySelectorAll('.page');

  // Remove active and previous classes
  pages.forEach(page => {
    page.classList.remove('active', 'previous');
  });

  // Set the active page
  const activePage = document.getElementById(pageId);
  activePage.classList.add('active');

  // Set the previous page
  const previousPage = Array.from(pages).find(page => page !== activePage);
  if (previousPage) {
    previousPage.classList.add('previous');
  }
}
