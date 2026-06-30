Tag.create("utama", {
  render(html) {
    return `<main>${html}</main>`;
  }
});
Tag.create("konten", {
  render(html) {
    return `<div class="content">${html}</div>`;
  }
});
Tag.create("kartu", {
  render(html) {
    return `<div class="widget">${html}</div>`;
  }
});
