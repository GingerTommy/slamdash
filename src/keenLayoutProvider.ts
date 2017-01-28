class KeenLayoutProvider implements LayoutProvider {
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
        const title = cell.title ? `<div class="chart-title">${cell.title}</div>` : '';
        const notes = cell.description ? `<div class="chart-notes">${cell.description}</div>` : '';
        return `<div class="chart-wrapper">${title}<div class="chart-stage"><div id="cell-${index}"></div></div>${notes}</div>`;
    }

    private heroSidebar(): string {
        return `<div class="container-fluid">
  <div class="row">
    <div class="col-sm-3">${this.getChartWrapper(0)}</div>
    <div class="col-sm-9">
      <div class="row">
          <div class="col-sm-12">${this.getChartWrapper(1)}</div>
      </div>
      <div class="row">
          <div class="col-sm-4">${this.getChartWrapper(2)}</div>
          <div class="col-sm-4">${this.getChartWrapper(3)}</div>
          <div class="col-sm-4">${this.getChartWrapper(4)}</div>
      </div>
      <div class="row">
          <div class="col-sm-4">${this.getChartWrapper(5)}</div>
          <div class="col-sm-4">${this.getChartWrapper(6)}</div>
          <div class="col-sm-4">${this.getChartWrapper(7)}</div>
      </div>
    </div>
  </div>
</div>`;
    }

    private heroThirds(): string {
        return `<div class="container-fluid">
  <div class="row">
    <div class="col-sm-8">${this.getChartWrapper(0)}</div>
    <div class="col-sm-4">${this.getChartWrapper(1)}</div>
  </div>
  <div class="row">
    <div class="col-sm-6 col-md-4">${this.getChartWrapper(2)}</div>
    <div class="col-sm-6 col-md-4">${this.getChartWrapper(3)}</div>
    <div class="col-sm-6 col-md-4">${this.getChartWrapper(4)}</div>
  </div>
  <div class="row">
    <div class="col-sm-6 col-md-4">${this.getChartWrapper(5)}</div>
    <div class="col-sm-6 col-md-4">${this.getChartWrapper(6)}</div>
    <div class="col-sm-6 col-md-4">${this.getChartWrapper(7)}</div>
  </div>
</div>`;
    }

    private quarterGrid(): string {
        return `<div class="container-fluid">
  <div class="row">
    <div class="col-sm-6 col-md-3">${this.getChartWrapper(0)}</div>
    <div class="col-sm-6 col-md-3">${this.getChartWrapper(1)}</div>
    <div class="col-sm-6 col-md-3">${this.getChartWrapper(2)}</div>
    <div class="col-sm-6 col-md-3">${this.getChartWrapper(3)}</div>
  </div>
  <div class="row">
    <div class="col-sm-6 col-md-3">${this.getChartWrapper(4)}</div>
    <div class="col-sm-6 col-md-3">${this.getChartWrapper(5)}</div>
    <div class="col-sm-6 col-md-3">${this.getChartWrapper(6)}</div>
    <div class="col-sm-6 col-md-3">${this.getChartWrapper(7)}</div>
  </div>
  <div class="row">
    <div class="col-sm-6 col-md-3">${this.getChartWrapper(8)}</div>
    <div class="col-sm-6 col-md-3">${this.getChartWrapper(9)}</div>
    <div class="col-sm-6 col-md-3">${this.getChartWrapper(10)}</div>
    <div class="col-sm-6 col-md-3">${this.getChartWrapper(11)}</div>
  </div>
  <div class="row">
    <div class="col-sm-6 col-md-3">${this.getChartWrapper(12)}</div>
    <div class="col-sm-6 col-md-3">${this.getChartWrapper(13)}</div>
    <div class="col-sm-6 col-md-3">${this.getChartWrapper(14)}</div>
    <div class="col-sm-6 col-md-3">${this.getChartWrapper(15)}</div>
  </div>
</div>`;
    }

    private splitCentered(): string {
        return `<div class="container-fluid">
  <div class="row">
    <div class="col-sm-3">
      <div class="row">
        <div class="col-sm-12">${this.getChartWrapper(0)}</div>
      </div>
      <div class="row">
        <div class="col-sm-12">${this.getChartWrapper(1)}</div>
      </div>
    </div>
    <div class="col-sm-6">${this.getChartWrapper(2)}</div>
    <div class="col-sm-3">
      <div class="row">
        <div class="col-sm-12">${this.getChartWrapper(3)}</div>
      </div>
      <div class="row">
        <div class="col-sm-12">${this.getChartWrapper(4)}</div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-4">${this.getChartWrapper(5)}</div>
    <div class="col-sm-4">${this.getChartWrapper(6)}</div>
    <div class="col-sm-4">${this.getChartWrapper(7)}</div>
  </div>
  <div class="row">
    <div class="col-sm-4">${this.getChartWrapper(8)}</div>
    <div class="col-sm-4">${this.getChartWrapper(9)}</div>
    <div class="col-sm-4">${this.getChartWrapper(10)}</div>
  </div>
</div>`;
    }

    private splitColumns(): string {
        return `<div class="container-fluid">
  <div class="row">
    <div class="col-sm-6">${this.getChartWrapper(0)}</div>
    <div class="col-sm-6">${this.getChartWrapper(1)}</div>
  </div>
  <div class="row">
    <div class="col-sm-6">${this.getChartWrapper(2)}</div>
    <div class="col-sm-6">${this.getChartWrapper(3)}</div>
  </div>
  <div class="row">
    <div class="col-sm-6 col-md-3">${this.getChartWrapper(4)}</div>
    <div class="col-sm-6 col-md-3">${this.getChartWrapper(5)}</div>
    <div class="col-sm-6 col-md-3">${this.getChartWrapper(6)}</div>
    <div class="col-sm-6 col-md-3">${this.getChartWrapper(7)}</div>
  </div>
</div>`;
    }

    private splitRows(): string {
        return `<div class="container-fluid">
  <div class="row">
    <div class="col-sm-3">${this.getChartWrapper(0)}</div>
    <div class="col-sm-9">${this.getChartWrapper(1)}</div>
  </div>
  <div class="row">
    <div class="col-sm-3">${this.getChartWrapper(2)}</div>
    <div class="col-sm-9">${this.getChartWrapper(3)}</div>
  </div>
  <div class="row">
    <div class="col-sm-3">${this.getChartWrapper(4)}</div>
    <div class="col-sm-9">${this.getChartWrapper(5)}</div>
  </div>
  <div class="row">
    <div class="col-sm-3">${this.getChartWrapper(6)}</div>
    <div class="col-sm-9">${this.getChartWrapper(7)}</div>
  </div>
</div>`;
    }

    private thirdsGrid(): string {
        return `<div class="container-fluid">
  <div class="row">
    <div class="col-sm-6 col-md-4">${this.getChartWrapper(0)}</div>
    <div class="col-sm-6 col-md-4">${this.getChartWrapper(1)}</div>
    <div class="col-sm-6 col-md-4">${this.getChartWrapper(2)}</div>
    <!-- end of row one -->
    <div class="col-sm-6 col-md-4">${this.getChartWrapper(3)}</div>
    <div class="col-sm-6 col-md-4">${this.getChartWrapper(4)}</div>
    <div class="col-sm-6 col-md-4">${this.getChartWrapper(5)}</div>
    <!-- end of row two -->
    <div class="col-sm-6 col-md-4">${this.getChartWrapper(6)}</div>
    <div class="col-sm-6 col-md-4">${this.getChartWrapper(7)}</div>
    <div class="col-sm-6 col-md-4">${this.getChartWrapper(8)}</div>
  </div>
</div>`;
    }

    private twoAndOne(): string {
        return `<div class="container-fluid">
  <div class="row">
    <div class="col-sm-6">${this.getChartWrapper(0)}</div>
    <div class="col-sm-6">${this.getChartWrapper(1)}</div>
  </div>
  <div class="row">
    <div class="col-sm-12">${this.getChartWrapper(2)}</div>
  </div>
</div>`;
    }
}

export {KeenLayoutProvider as keenLayoutProvider};