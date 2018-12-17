import './Table.css';

export class Table {

    element: HTMLTableElement;
    width: number;
    height: number;
    cells: HTMLTableDataCellElement[][] = [];

    static build(parent: HTMLDivElement | HTMLBodyElement, width: number, height: number, cellClick: (row: number, col: number) => void): Table {
        const table = new Table();
        table.element = document.createElement('table');

        for (let row = 0; row < height; row++) {
            let rowElement = document.createElement('tr');
            table.cells.push([]);

            for (let cell = 0; cell < width; cell++) {
                let cellElement = document.createElement('td');
                cellElement.innerHTML = `(${row},${cell})`;
                cellElement.onclick = () => cellClick(row, cell);
                table.cells[row].push(cellElement);

                rowElement.appendChild(cellElement);
            }

            table.element.appendChild(rowElement);
        }

        parent.appendChild(table.element);
        return table;
    }

    id(id: string): Table {
        this.element.id = id;
        return this;
    }

    className(className: string): Table {
        this.element.className = className;
        return this;
    }

    getCell(row: number, column: number): HTMLTableDataCellElement {
        return this.cells[row][column];
    }

}
