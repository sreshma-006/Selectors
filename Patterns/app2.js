/* Hollow Inverted Half Pyramid */

// var row = 5
// for (i = 1; i <= row; i++) 
// {
//   for (j = 1; j < i; j++) 
//   {
//     console.log("&nbsp;&nbsp;");
//   }
//     for (j = 1; j <= (row * 2 - (2 * i - 1)); j++) 
//     {
//       if (i == 1 || j == 1 || j == (row * 2 - (2 * i - 1))) 
//       {
//         console.log("*");
//       } 
//       else {
//         console.log("&nbsp;&nbsp;");
//       }
//     }
//   console.log("<br/>")
// }
var n = 6;
      printPattern(n);
      function printPattern(n)
      {
        var i, j, k = 0;
        for (i = 1; i <= n; i++)// row=6
        {
          // Print spaces
          for (j = i; j < n; j++)
          {
            document.write("  ");
          }
           
          // Print #
          while (k != 2 * i - 1)
          {
            if (k == 0 || k == 2 * i - 2)
                document.write("#");
            else
                document.write("  ");
            k++;
          }
          k = 0;
          document.write("<br>"); // print next row
        }
         
        // print last row
        for (i = 0; i < 2 * n - 1; i++)
        {
          document.write("*");
        }
      }