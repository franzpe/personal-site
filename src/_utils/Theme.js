class Theme {
  constructor() {
    this.body = document.body;
    this.currTheme = this.body.classList.contains('dark-theme') ? 'dark' : 'light';
  }

  init() {
    const theme = localStorage && localStorage.getItem('theme');

    if (theme) {
      if (this.currTheme === theme) {
        return;
      }
    }

    this.toggle();
  }

  toggle() {
    this.body.classList.toggle('dark-theme');
    this.currTheme = this.currTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', this.currTheme);
  }
}

export default Theme;
