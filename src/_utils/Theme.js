export const theme = {
  DARK: 'dark',
  LIGHT: 'light'
};

class Theme {
  constructor(themeChanged) {
    this.body = document.body;
    this.currTheme = this.body.classList.contains('dark-theme') ? theme.DARK : theme.LIGHT;
    this.themeChanged = themeChanged;
  }

  init() {
    const theme = localStorage && localStorage.getItem('theme');

    if (theme) {
      if (this.currTheme !== theme) {
        this.toggle();
      }
    } else {
      localStorage.setItem('theme', this.currTheme);
    }
  }

  toggle() {
    this.body.classList.toggle('dark-theme');
    this.currTheme = this.currTheme === theme.DARK ? theme.LIGHT : theme.DARK;
    localStorage.setItem('theme', this.currTheme);
    this.themeChanged();
  }
}

export default Theme;
