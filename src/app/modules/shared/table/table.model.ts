export namespace TableConfig{
  export interface ITableConfig {
    tableId: string;
    rowHeight: number;
    columns: IColumn[];
  }
  export class TableConfig implements ITableConfig {
    constructor() {
      this.tableId = Math.floor(Math.random() * 1000000000).toString();
      this.rowHeight = 37;
      this.columns = [];
    }
    tableId: string;
    rowHeight: number;
    columns: IColumn[];
  }

  export interface ITableData {
    rows: any[];
    count: number;
    resetGrid: boolean;
  }
  export interface IColumn {
    name: string;
    header: string;
    dataType: ColumnTypeEnum;
    columnChooser?: boolean;
    visible?: boolean;
    isPrimaryKey?: boolean;
    headerTemplate?: any;
    template?: any;
  }
  export enum ColumnTypeEnum {
    String = "string",
    Number = "number",
    Boolean = "boolean",
    Date = "date",
    Datetime = "datetime",
    Decimal = "decimal",
  }
  export class Column implements IColumn {
    constructor(name: string, options?: IColumnOptionalParams) {
      this.name = name;
      this.header = options?.header ? options.header : name;
      this.dataType = options?.dataType ? options.dataType : ColumnTypeEnum.String;

      this.visible = (options?.visible == null) ? true : options.visible;
      this.columnChooser = (options?.columnChooser == null) ? this.visible : options.columnChooser;
      this.isPrimaryKey = (options?.isPrimaryKey == null) ? false : options.isPrimaryKey;

      this.headerTemplate = options?.headerTemplate ? options.headerTemplate : null;
      this.template = options?.template ? options.template : null;
    }
    name: string;
    header: string;
    dataType: ColumnTypeEnum;
    columnChooser?: boolean;
    visible?: boolean;
    isPrimaryKey?: boolean;
    headerTemplate?: any;
    template?: any;
  }
  interface IColumnOptionalParams {
    header?: string;
    dataType?: ColumnTypeEnum;
    columnChooser?: boolean;
    visible?: boolean;
    isPrimaryKey?: boolean;
    headerTemplate?: any;
    template?: any;
  }
}
