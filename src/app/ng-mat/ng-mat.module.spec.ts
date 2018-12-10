import { NgMatModule } from './ng-mat.module';

describe('NgMatModule', () => {
  let ngMatModule: NgMatModule;

  beforeEach(() => {
    ngMatModule = new NgMatModule();
  });

  it('should create an instance', () => {
    expect(ngMatModule).toBeTruthy();
  });
});
