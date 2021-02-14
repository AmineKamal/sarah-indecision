declare var annyang: any;
declare var SpeechKITT: any;

const COMMANDS = [
  "nouveau *item",
  "selectionner *item",
  "ajouter *item",
  "supprimer *item",
] as const;

type Command = typeof COMMANDS[number];

interface ListItem {
  options: string[];
  name: string;
}

export class VoiceListManager {
  private list: ListItem[];
  private current = -1;
  private update: () => any;
  public enabled = false;

  public constructor() {
    if (!annyang) {
      return;
    }

    annyang.setLanguage("fr-FR");

    annyang.addCallback("error", () => {
      console.log("ERREUR");
    });

    annyang.addCallback("result", (args: any) => {
      console.log(args);
    });

    this.init();
  }

  toggle() {
    this.enabled ? this.stop() : this.start();
  }

  link(list: ListItem[], update: () => any) {
    this.list = list;
    this.update = update;
  }

  start() {
    if (!annyang) {
      alert("Il y'a un problème avec la reconnaissance vocal.");
      this.enabled = false;
      return;
    }

    annyang.start();
    this.enabled = true;
  }

  stop() {
    if (!annyang) {
      this.enabled = false;
      return;
    }

    annyang.abort();
    this.enabled = false;
  }

  private init() {
    if (!annyang) {
      return;
    }

    const commands = {
      test: () => alert("TEST"),
      "créer *item": (item: string) => this.newItem(item),
      "sélectionner *item": (item: string) => this.select(item),
      "ajouter *item": (item: string) => this.add(item),
      "supprimer *item": (item: string) => this.remove(item),
    };

    annyang.addCommands(commands);
  }

  private newItem(name: string) {
    name = name.toUpperCase();
    this.list.push({ name, options: [] });
    this.update();
  }

  private select(name: string) {
    name = name.toUpperCase();
    this.current = this.list.findIndex((i) => i.name === name);
  }

  private add(option: string) {
    if (!this.list[this.current]) {
      return;
    }

    this.list[this.current].options.push(option.toUpperCase());
    this.update();
  }

  private remove(option: string) {
    if (!this.list[this.current]) {
      return;
    }

    const options = this.list[this.current].options;
    const i = options.indexOf(option.toUpperCase());

    if (i < 0) {
      return;
    }

    options.splice(i, 1);
    this.update();
  }
}
