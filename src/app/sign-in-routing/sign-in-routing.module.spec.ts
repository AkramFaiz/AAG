import { SignInRoutingModule } from './sign-in-routing.module';

describe('SignInRoutingModule', () => {
  let signInRoutingModule: SignInRoutingModule;

  beforeEach(() => {
    signInRoutingModule = new SignInRoutingModule();
  });

  it('should create an instance', () => {
    expect(signInRoutingModule).toBeTruthy();
  });
});
