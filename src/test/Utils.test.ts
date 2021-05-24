import { Utils } from '../app/Utils';

describe('Utils test suite', () => {
  beforeEach(() => {});
  beforeAll(() => {});

  test('first test', () => {
    const res = Utils.toUpperCase('abc');
    expect(res).toBe('ABC');
  });

  test('parse url', () => {
    const res = Utils.parseUrl('http://loclhost:8080/login');
    expect(res.href).toBe('http://loclhost:8080/login');
    expect(res.port).toBe('8080');
    expect(res.protocol).toBe('http:');
    expect(res.query).toEqual({});
  });
  test('parse url with query', () => {
    const res = Utils.parseUrl('http://loclhost:8080/login?user=user&pass=pass');
    const expectedQuery = {
      user: 'user',
      pass: 'pass',
    };
    expect(res.query).toEqual(expectedQuery);
  });
  test.only('invalid URL', () => {
    try {
      Utils.parseUrl('');
    }
    catch(err){
      expect(err).toBeInstanceOf(Error);
      expect(err).toHaveProperty('message','Empty URL!');
    }
  });
});
