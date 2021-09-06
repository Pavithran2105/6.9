var collection = [

];





var container$ = document.getElementById("table-container");



var table$ = document.createElement("table");


var tbody$ = document.createElement("tbody");



function displayNotesTable(inputNotes) {

    var node = document.getElementsByTagName("tbody");
    node[0].querySelectorAll('*').forEach(n => n.remove());

    for (var i = 0; i < inputNotes.length; i++) {

        

        var tr$ = document.createElement("tr");
        
        
        var td1$ = document.createElement("td");
        var td2$ = document.createElement("td");
        var td3$ = document.createElement("td");
        var td4$ = document.createElement("td");


        
        td1$.innerHTML = ` <td style= "width:3%;"><a onclick="strikeLine(${i})"><i class="fa fa-check"></i></a></td> `;
        td2$.innerHTML = inputNotes[i]["Notes"];
        td3$.innerHTML = `<td style= "width:3%;"><a onclick="editRow(${i})"><i class="fa fa-pencil-square-o"></a></td>`;
        td4$.innerHTML = ` <td style= "width:3%;"><a onclick="deleteRow(${i})"><i class="fa fa-trash-o "></i></a></td> `;

        

        
        tr$.appendChild(td1$);
        tr$.appendChild(td2$);
        tr$.appendChild(td3$);
        tr$.appendChild(td4$);
        td1$.style.width = '3%';
        td2$.style.width = '91%';
        td3$.style.width = '3';
        td4$.style.width = '3%';
        

        tbody$.appendChild(tr$);
    }

}

function addNotes() {

    var newCollection = {};
    
    var notes = document.getElementById("notes").value;

    
    newCollection['Notes'] = notes;

    collection.push(newCollection);
    displayNotesTable(collection);
    clearFields();
}

table$.appendChild(tbody$);
container$.appendChild(table$);

function deleteRow(index) {
    collection.splice(index, 1);
    displayNotesTable(collection);
}


function editRow(index) {
    var updatedObj = collection[index];
    
    document.getElementById("notes").value = updatedObj.Notes;
    document.getElementById("updateBtn").style.display='block';
    document.getElementById("addBtn").style.display='none';
    
}

function updateNotes() {
    
    var notes = document.getElementById("notes").value;
    var foundNoteUh = collection.find(function(noteUh){
        return noteUh.Notes==notes;
    });
    
    foundNoteUh.Notes = Notes;
    displayNotesTable(collection);
    clearFields();
    
    document.getElementById("updateBtn").style.display='none';
    document.getElementById("addBtn").style.display='block';

}
function strikeLine(index) {
    var updatedObj = collection[index];
    
    // document.getElementById("notes").value = updatedObj.Notes;

    updatedObj.style.setProperty('text-decoration', 'line-through');

    collection.push(updatedObj);
    
    tr$.style.setProperty('background-color', 'black');
    displayNotesTable(collection);
}


function clearFields() {
    
    document.getElementById("notes").value = '';
}
