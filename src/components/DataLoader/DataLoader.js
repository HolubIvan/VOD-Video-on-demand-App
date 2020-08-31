export default class DataLoader {
  constructor(url) {
    this.url = url;
  }
  async get() {
    try {
      const request = await fetch(this.url);
      const data = await request.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async post() {
    try {
      const request = await fetch(this.url, {
        method: "POST",
      });
      const data = await request.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
