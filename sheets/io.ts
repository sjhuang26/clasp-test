namespace App {
    export function output(msg: string) {
        const ui = SpreadsheetApp.getUi();
        ui.alert(msg);
    }

    export function createMenus() {
        const ui = SpreadsheetApp.getUi();
        ui.createMenu("GAS Test")
            .addItem("First test", "firstTest")
            .addItem("Second test", "secondTest")
            .addToUi();
    }

    export function readDataAsArray(): any[][] {
        return SpreadsheetApp.getActive()
            .getDataRange()
            .getValues();
    }
}
