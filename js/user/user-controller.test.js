const UserController = require("./user-controller");
const User = require("./user");

let userController;

beforeEach(() => {
    userController = new UserController();
});

test('add user who is not in the list', () => {
    let user = new User(1, "Alice", "alice@example.com");
    userController.add(user);
    expect(userController.getUsers()).toContain(user);
});

test('remove user who is not in the list does nothing', () => {
    let user = new User(2, "Bob", "bob@example.com");
    //  No agregamos el usuario, intentamos eliminarlo
    userController.remove(user);
    expect(userController.getUsers()).not.toContain(user);
});

test('findByEmail returns correct user', () => {
    let user = new User(3, "Carol", "carol@example.com");
    userController.add(user);
    expect(userController.findByEmail("carol@example.com")).toEqual(user);
});

test('findByEmail returns undefined if email not found', () => {
    expect(userController.findByEmail("nonexistent@example.com")).toBeUndefined();
});

test('findById returns correct user', () => {
    let user = new User(4, "Dave", "dave@example.com");
    userController.add(user);
    expect(userController.findById(4)).toEqual(user);
});

test('findById returns undefined if id not found', () => {
    expect(userController.findById(999)).toBeUndefined();
});

