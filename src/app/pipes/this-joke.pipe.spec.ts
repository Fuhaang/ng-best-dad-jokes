import { ThisJokePipe } from './this-joke.pipe';

describe('ThisJokePipe', () => {
  it('create an instance', () => {
    const pipe = new ThisJokePipe();
    expect(pipe).toBeTruthy();
  });
});
