import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

export const ROOT_SELECTOR = 'app-root';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './styles/app.scss',
    './styles/carbon-override.scss',
    './styles/flex.scss',
    './styles/common.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
