import { AddNewItemsRoutingModule } from './add-new-items-routing.module';

describe('AddNewItemsRoutingModule', () => {
  let addNewItemsRoutingModule: AddNewItemsRoutingModule;

  beforeEach(() => {
    addNewItemsRoutingModule = new AddNewItemsRoutingModule();
  });

  it('should create an instance', () => {
    expect(addNewItemsRoutingModule).toBeTruthy();
  });
});
