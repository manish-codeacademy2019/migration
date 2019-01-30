const Model = require('../../models');

describe('User Generation', () => {
  afterAll(() => {
    Model.sequelize.close();
  });
  beforeEach(async () => {
    await Model.User.truncate();
  });
  it('Should Insert an user into table', async () => {
    await Model.User.generate(1, 'ABC');
    const allUsers = await Model.User.findAllUsers();
    expect(allUsers.length).toEqual(1);
  });
  it('Should Insert an user into table', async () => {
    await Model.User.generate(2, 'ABCD');
    const allUsers = await Model.User.findUserById(2);
    expect(allUsers.toJSON().name).toEqual('ABCD');
  });
});
