function num2obj(num)
{
    var obj={};
    if (num >= 0 && num <= 999)
    {
        
         obj=
         {
             hundreds: (num-num%100)/100,
             decades: (num%100-num%10)/10,
             units: num%10,
         };
    
    }
    return obj;
}
 