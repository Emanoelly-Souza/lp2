var book = {
    Title: "Olá Mundo"
};
var book =
    Object, create(Object.prototype, {
        Title: {
            Configurable: true,
            Enumerable: true,
            Value: "Olá Mundo",
            Writable: true
        }
    });