let X1='logFC';
let Y1='FDR';
let X2='log_AveExpr';
let Y2='logFC';

let Y_LABEL_SCATTER1 = '-log10FDR';
let X_LABEL_SCATTER1 = 'log2FC';

let Y_LABEL_SCATTER2 = 'log2FC';
let X_LABEL_SCATTER2 = 'AveExpr';

let FLIP_Y1=false;
let FLIP_Y2=false;

let PLOT_WIDTH=550;
let PLOT_HEIGHT=400;

let PROJECT_TITLE='WT_CAS9';
let TAB_TITLE='WT_CAS9';

let _margin_1 = 0.01;
let _margin_2 = 0.01;

let _border_1_x = 0;
let _border_1_y = 0;

let _border_2_x = 0;
let _border_2_y = 0;

let BOX_PLOT_COLS_1 = ['WT.1','WT.2','WT.3']
let BOX_PLOT_COLS_2 = ['CAS9.3','CAS9.3','CAS9.3']

//need to manually change conditions in
//xs table (index.html) and scatter plot app (app.js)
let CONDITION_1 = 'WT'
let CONDITION_2 = 'CAS9'


let COLOR_SELECTION_TABLE = 'orange';
let COLOR_SELECTION_CIRCLE = 'orange';

let Y_LABEL_BARPLOT = 'Log10 Intensity';

let File_1 = 'indata_WT_CAS9.csv';
let File_2 = 'indata2_WT_CAS9.csv';


//these are th columns to show from file n1
//positions og Gene_acc','Gene_id' must not change
let COLUMNS_TO_TABULATE = ['Gene_acc','Gene_id','logFC','log_AveExpr','FDR','Desc'];