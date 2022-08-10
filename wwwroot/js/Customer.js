$(document).ready(function () {

    GeneratedCustomerSummaryGrid();

});

function openPopupWindow() {

    var objWin = $("#myPopUp");

    objWin.kendoWindow({
        title: "Add new Customer",
        width: "600px",
        height: "900px",
        visible: false,
    }).data("kendoWindow").center().open();
}

function GeneratedCustomerSummaryGrid() {

    $("#customerGridAll").kendoGrid({

        dataSource: gridDataSource(),
        xheight: 300,
        columns: GeneratedCustomerInfoColumns(),
        sortable: true,
        reorderable: true,
        resizable: true,
        filterable: true,
        columnMenu: true,
        pageable: true,
        editable: false,
        selectable: "row"
    });
}


function gridDataSource() {

    var gridDataSource = new kendo.data.DataSource({
        type: "json",
        pageSize: 10,

        transport: {
            read: {
                url: '/Customer/GetAll/',

                type: "POST",

                dataType: "json",

                contentType: "application/json; charset=utf-8"
            },
            update: {
                url: 'Customer/Edit',
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
            },
            destroy: {
                url: '/Customer/Delete/',
            }
            ,
            parameterMap: function (options, operation) {
                if (operation !== "read" && options) {
                    console.warn(options);
                    return { models: kendo.stringify(options) };
                }
                console.warn(JSON.stringify(options));
                return JSON.stringify(options);
            }
        },
        schema: {
            model: {
                id: "customerId",
                fields: {
                    "name": { type: "string" },
                    "phone": { type: "string" },
                    "discount": { type: "string" },
                    "sex": { type: "string" },
                    "remarks": { type: "string" },
                }
            }
        }
    });

    return gridDataSource;
}

function GeneratedCustomerInfoColumns() {
    return columns = [

        {
 

            //template = (e => { }).ClientTemplate("<img src='../../Images/pic.png'/>").Width(140).Title("Image"),
            title: "Photo",
            width: 60
        },

        { field: "customerId", width: 60 },
        { field: "name", title: "Name", width: 60 },
        { field: "phone", title: "Phone", width: 60 },
        { field: "discount", title: "Discount", width: 60 },
        { field: "sex", title: "Sex", width: 60, sortable: true },
        { field: "remarks", title: "Remarks", width: 60, sortable: true },
        { field: "postCode ", hidden: true, title: "PostCode ", width: 60, sortable: false },
        { field: "thana ", hidden: true, title: "thana ", width: 60, sortable: false },
        { field: "address1 ", hidden: true, title: "address1 ", width: 60, sortable: false },
        { field: "landPhone ", hidden: true, title: "landPhone ", width: 60, sortable: false },
        { field: "postOffice ", hidden: true, title: "postOffice ", width: 60, sortable: false },
        { field: "zilla ", hidden: true, title: "zilla ", width: 60, sortable: false },
        { field: "permanentAddress ", hidden: true, title: "permanentAddress ", width: 60, sortable: false },
        { field: "Edit", title: "Edit", filterable: false, width: 50, template: '<button type="button" class="k-button" value="Edit" id="btnEdit" onClick="clickEventForEditButton()" ><span class="k-icon k-i-pencil"></span></button>', sortable: false },
        { field: "Delete", title: "Delete", filterable: false, width: 50, template: '<button type="button" class="k-button" value="Edit" id="btnEdit" onClick="clickEventForDeleteButton()" ><span class="k-icon k-i-trash"></span></button>', sortable: false }
    ];
}


function clickEventForDeleteButton() {
    var grid = $('#customerGridAll').data("kendoGrid");
    var data = grid.dataSource.data();
    var entityGrid = $("#customerGridAll").data("kendoGrid");
    var selectedItem = entityGrid.dataItem(entityGrid.select());

    grid.tbody.find('>tr').each(function () {
        var dataItem = grid.dataItem(this);
        if (dataItem.selectedItem != null) {
            $(this).css('color', 'red');
        }
        $(this).css('color', 'red');
    })
}

function clickEventForEditButton() {
    var entityGrid = $("#customerGridAll").data("kendoGrid");
    var selectedItem = entityGrid.dataItem(entityGrid.select());
    if (selectedItem != null) {
        populateCustomerDetails(selectedItem);

    }
}

function populateCustomerDetails(obj) {
    var objWin = $("#myPopUp");

    objWin.kendoWindow({
        title: "Add new Customer",
        width: "600px",
        height: "900px",
        visible: false,
    }).data("kendoWindow").center().open();

    $('#Name').val(obj.name);
    $('#CustomerID').val(obj.id);
    $('#Discount').val(obj.discount);
    $('#Name').val(obj.name);
    $('#Sex').val(obj.sex);
    $('#PostCode').val(obj.postCode);
    $('#Thana').val(obj.thana);
    $('#Zilla').val(obj.zilla);
    $('#Address1').val(obj.address1);
    $('#LandPhone').val(obj.landPhone);
    $('#Zilla').val(obj.zilla);
    $('#PostOffice').val(obj.postOffice);
    $('#PermanentAddress').val(obj.permanentAddress);
    $('#Remarks').val(obj.remarks);
    $('#Phone').val(obj.phone);

}

function AddCustomerInfo() {
    var cstObj = {
        CustomerId: $('#CustomerID').val(),
        Name: $('#Name').val(),
        Phone: $('#Phone').val(),
        Discount: $('#Discount').val(),
        Sex: $('#Sex').val(),
        Remarks: $('#Remarks').val(),
        PostCode: $('#PostCode').val(),
        Thana: $('#Thana').val(),
        Address1: $('#Address1').val(),
        LandPhone: $('#LandPhone').val(),
        PostOffice: $('#PostOffice').val(),
        Zilla: $('#Zilla').val(),
        PermanentAddress: $('#PermanentAddress').val(),
    };

    var DATA = cstObj;

    $.ajax({
        url: '/Customer/Create',
        data: { "prm": DATA },
        type: "POST",
        dataType: "json",
        async: true,
        success: function (result) {
            alert('Successfully Added to the Database');
            closePopup();
            $("#customerGridAll").data("kendoGrid").dataSource.read();

        },
        error: function () {
            alert('Failed to receive the Data');
        }
    });

}

function closePopup() {
    $("#myPopUp").data("kendoWindow").close();
}


