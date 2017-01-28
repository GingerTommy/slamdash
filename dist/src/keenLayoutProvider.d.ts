declare class KeenLayoutProvider implements LayoutProvider {
    private cells;
    getNamedLayout(name: string, cells: Array<CellInfo>): string;
    private getChartWrapper(index);
    private heroSidebar();
    private heroThirds();
    private quarterGrid();
    private splitCentered();
    private splitColumns();
    private splitRows();
    private thirdsGrid();
    private twoAndOne();
}
export { KeenLayoutProvider as keenLayoutProvider };
