class EventBrite {
  constructor() {
    this.token_auth = "";
    this.orden = "date";
  }
  async getEvents(event, categories) {
    const resultEvent = await fetch(
      `https://www.eventbriteapi.com/v3/events/search/?q=${event}&sort_by=${this.orden}&categories=${categories}&token=${this.token_auth}`
    );

    const events = await resultEvent.json();

    return { events };
  }
  async getCategories() {
    const res = await fetch(
      `https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`
    );
    const categories = await res.json();

    return { categories };
  }
}
