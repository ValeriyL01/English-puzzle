import './statisticsPages.css';
import createElement from '../components/createElement';

const statisticsPages = createElement('div', 'statistics-pages');
const statisticsPagesContainer = createElement('div', 'statistics-pages-container');
const continueButtonStatisticsPages = createElement(
  'button',
  'continue-button-statistic',
  'Continue',
) as HTMLButtonElement;
statisticsPages.append(statisticsPagesContainer);
statisticsPagesContainer.append(continueButtonStatisticsPages);
export { statisticsPages, continueButtonStatisticsPages };
