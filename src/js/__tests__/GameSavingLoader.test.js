import GameSavingLoader from '../GameSavingLoader';

test('should sum', async (done) => {
  const {
    created,
    id,
    userInfo,
  } = await GameSavingLoader.load();
  expect({
    created,
    id,
    userInfo,
  }).toEqual({
    created: 1546300800,
    id: 9,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
  done();
});
