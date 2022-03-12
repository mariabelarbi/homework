let sort=(a)=>
{
    for(let i=0;i<a.length;i++)
    for(j=i+1;j<a.length;j++) 
    if(a[i]>a[j])
    {let x = a[i];
        a[i]=a[j];
        a[j]=x;

    }
}
let arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
sort(arr);
console.log(arr);