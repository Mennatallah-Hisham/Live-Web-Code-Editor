const blocks=["htmlCode","cssCode","jsCode"];
const blockValue=["<div>\n\n</div>","<style>\n\n</style>","<script>\n\n</script>"]

blocks.forEach((element,i)=>{
    const item= localStorage.getItem(element);
    
    if(!item){
        
       
    document.getElementById(element).value=blockValue[i];

    }else{
    
        document.getElementById(element).value=item;
        showPreview();
    }  
})



function showPreview(){
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = ""+document.getElementById("cssCode").value+"";
    var jsCode = ""+document.getElementById("jsCode").value+"";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();
}

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}


function saveToLocalStorage(id){
    const element=document.querySelector(`#${id}`);
    localStorage.setItem(id,element.value);
  

}

