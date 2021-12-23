import '@testing-library/jest-dom/extend-expect';
import Data from '../mock/fetchBreeds';

describe('test fetching data', () => {
  it('test fetching country name', async () => {
    await Data().then((data) => expect(data.data[0].name).toBe('Akita'));
  });
  it('test fetching country code', async () => {
    await Data().then((data) => expect(data.data[0].breed_group).toBe('working'));
  });

  it('test fetching cases recovered', async () => {
    await Data().then((data) => expect(data.data[1].life_span).toEqual('10-13 years'));
  });
});
