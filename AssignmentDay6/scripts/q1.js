let colors = ['yellow','orange','red','brown','black'];
let i = 0;

function change(){
    document.body.bgColor = colors[i];
    i=(i+1)%colors.length;
    setTimeout(change,5000);   
}