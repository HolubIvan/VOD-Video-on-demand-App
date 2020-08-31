export default class DataLoader {
  constructor(url) {
    this.url = url;
  }
  async get() {
    const request = await fetch(this.url);
    const data = await request.json();
    return data;
  }

  async post() {
    const request = await fetch(this.url, {
      method: "POST",
    });
    const data = await request.json();
    return data;
  }
}