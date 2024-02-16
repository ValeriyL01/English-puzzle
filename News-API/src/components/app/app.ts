import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
  public controller: AppController;

  public view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start(): void {
    const sourses: HTMLElement | null = document.querySelector('.sources');
    if (sourses instanceof HTMLElement) {
      sourses.addEventListener('click', (e) => this.controller.getNews(e, (data) => AppView.drawNews(data)));
      this.controller.getSources((data) => AppView.drawSources(data));
    }
  }
}

export default App;
