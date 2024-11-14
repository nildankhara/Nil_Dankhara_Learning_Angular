import { BikeNameWithModelPipe } from './bike-name-with-model.pipe';

describe('BikeNameWithModelPipe', () => {
  it('create an instance', () => {
    const pipe = new BikeNameWithModelPipe();
    expect(pipe).toBeTruthy();
  });
});
