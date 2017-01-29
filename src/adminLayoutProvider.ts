class AdminLayoutProvider implements LayoutProvider {
    private cells: Array<CellInfo> = [];

    public getNamedLayout(name: string, cells: Array<CellInfo>): string {
        this.cells = cells;
        return this[name]();
    }

    private getChartWrapper(index: number): string {
        if (this.cells.length <= index) {
            return '';
        }

        const cell = this.cells[index];
        if (cell.hide) {
            return '';
        }

        const title = cell.title ? `<div class="chart-title">${cell.title}</div>` : '';
        const notes = cell.description ? `<div class="chart-notes">${cell.description}</div>` : '';
        return `<div class="chart-wrapper">${title}<div class="chart-stage"><div id="cell-${index}"></div></div>${notes}</div>`;
    }

    private sixTwoTwo(): string {
        return `<div class="container-fluid>
  <div class="row">
    <div class="col-sm-2">${this.getChartWrapper(0)}</div>
    <div class="col-sm-2">${this.getChartWrapper(1)}</div>
    <div class="col-sm-2">${this.getChartWrapper(2)}</div>
    <div class="col-sm-2">${this.getChartWrapper(3)}</div>
    <div class="col-sm-2">${this.getChartWrapper(4)}</div>
    <div class="col-sm-2">${this.getChartWrapper(5)}</div>
  </div>
  <div class="row">
    <div class="col-sm-6">${this.getChartWrapper(6)}</div>
    <div class="col-sm-6">${this.getChartWrapper(7)}</div>
  </div>
  <div class="row">
    <div class="col-sm-6">${this.getChartWrapper(8)}</div>
    <div class="col-sm-6">${this.getChartWrapper(9)}</div>
  </div>
</div>`;
    }
}

export {AdminLayoutProvider as adminLayoutProvider};