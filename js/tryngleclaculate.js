function calculateTriangleArea (){
    // get base
    const Trianglebase = document.getElementById('Triangle-base').value ;
    const Base = parseFloat(Trianglebase);

    // get hight
    const triangleHight = document.getElementById('triangle-hight').value;
    const hight  = parseFloat(triangleHight);
    
    const area = 0.5 * Base * hight ;
    console.log(area);

    // show this calculate 
    const showTriangle = document.getElementById('show-triangle');
    showTriangle.innerText = area;
};