import { DireflowComponent } from 'direflow-component';
import App from './direflow-component/App';

const direflowComponent = new DireflowComponent();

direflowComponent.setProperties({
  componentTitle: 'Apollo Starter',
});

direflowComponent.render(App, 'apollo-starter');
