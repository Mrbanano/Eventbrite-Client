class EventBrite {
  constructor() {
    this.token_auth = "GFJLI7ELXABUSP3LRFVW";
    this.orden = "date";
  }
  async getCategories() {
    const res = await fetch(
      `https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`
    );
    const categories = await res.json();

    return { categories };
  }
}
