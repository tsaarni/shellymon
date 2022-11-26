export class ShellyDevice {
  name: string;
  address: string;

  icon: string;
  type: string;
  power: string;
  total: string;
  data: [Date, number][];

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;

    this.icon = "";
    this.type = "";
    this.power = "-";
    this.total = "-";
    this.data = [];
  }

  queryDevice() {
    return fetch(`http://${this.address}/shelly`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        this.type = data.type;
        this.icon = `/images/${data.type}.png`;
      });
  }

  getMeasurement(): Promise<[Date, number]> {
    let f = new Intl.NumberFormat("fi-FI", { maximumSignificantDigits: 2 });
    return fetch(`http://${this.address}/meter/0`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        this.power = data.power.toFixed(2);
        this.total = (data.total / 60).toFixed(2);
        this.data.push([new Date(), data.power]);
        return [new Date(), data.power];
      });
  }
}
