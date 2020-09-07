export default class DataLoader {
  constructor(url, param) {
    this.url = url;
    this.param = param;
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
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filters: this.param,
        }),
      });
      const data = await request.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
