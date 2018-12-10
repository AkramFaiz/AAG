import { AddNewItemsModule } from './add-new-items.module';

describe('AddNewItemsModule', () => {
  let addNewItemsModule: AddNewItemsModule;

  beforeEach(() => {
    addNewItemsModule = new AddNewItemsModule();
  });

  it('should create an instance', () => {
    expect(addNewItemsModule).toBeTruthy();
  });
});
