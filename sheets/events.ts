function onOpen() {
    App.createMenus();
}

function firstTest() {
    App.output(JSON.stringify(App.readDataAsArray()));
    App.output("First test completed!");
}

function secondTest() {
    App.output("Second test completed!");
}
